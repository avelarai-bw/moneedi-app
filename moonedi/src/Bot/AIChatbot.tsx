import React, { useState, useRef, useEffect } from 'react';
import styles from './AIChatbot.module.css';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: "Hello! I'm Moneedi AI Assistant. How can I help you today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://moneedi-app.onrender.com/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ 
          message: userMessage 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.reply 
        }]);
      } else {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "Sorry, I couldn't process that request." 
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Unable to connect to Moneedi AI. Please try again." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const clearChat = () => {
    if (window.confirm("Clear chat history?")) {
      setMessages([{
        role: 'assistant',
        content: "Chat cleared. How can I assist you today?"
      }]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        className={styles.aiButton} 
        onClick={() => setIsOpen(!isOpen)}
        title="Moneedi AI Assistant"
      >
        🤖
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div>
              <h3>Moneedi AI Assistant</h3>
              <p>Powered by Groq</p>
            </div>
            <div className={styles.headerButtons}>
              <button onClick={clearChat} className={styles.clearBtn} title="Clear Chat">
                Clear
              </button>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>
          </div>

          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`${styles.message} ${msg.role === 'user' ? styles.user : styles.assistant}`}
              >
                {msg.content}
              </div>
            ))}
            
            {isLoading && (
              <div className={styles.typing}>Moneedi AI is thinking...</div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputArea}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Moneedi..."
              disabled={isLoading}
            />
            <button 
              onClick={sendMessage} 
              disabled={isLoading || !input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;