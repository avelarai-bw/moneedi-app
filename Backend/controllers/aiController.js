// controllers/aiController.js
const Groq = require('groq-sdk');
const fs = require('fs');
const path = require('path');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

let knowledgeBase = "";

// Load documents with better logging
const loadDocuments = () => {
  try {
    const docsDir = path.join(__dirname, '../documents');
    
    if (!fs.existsSync(docsDir)) {
      console.log("❌ 'documents' folder not found!");
      knowledgeBase = "Moneedi Enterprises is a pork company in Botswana.";
      return;
    }

    const files = fs.readdirSync(docsDir);
    console.log(`Found ${files.length} file(s) in documents folder:`, files);

    let loadedText = "MONEEDI ENTERPRISES COMPANY PROFILE:\n\n";

    files.forEach(file => {
      const filePath = path.join(docsDir, file);
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        loadedText += `\n--- ${file.toUpperCase()} ---\n${content}\n\n`;
        console.log(`✅ Successfully loaded: ${file}`);
      } catch (err) {
        console.log(`❌ Failed to read: ${file}`);
      }
    });

    knowledgeBase = loadedText;
    console.log("🎉 Knowledge base loaded successfully!");

  } catch (error) {
    console.error("Error loading documents:", error);
    knowledgeBase = "Moneedi Enterprises is a pork manufacturing company in Botswana.";
  }
};

loadDocuments();

const chatWithMoneedi = async (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are Moneedi AI Assistant for Moneedi Enterprises (Pty) Ltd, a pork manufacturing company in Botswana.

IMPORTANT INSTRUCTIONS:
- ONLY use the information provided in the "Knowledge Base" below.
- Do NOT make up any information.
- If the answer is not in the knowledge base, say "I don't have that information yet."
- Always be professional, friendly and accurate.

KNOWLEDGE BASE:
${knowledgeBase}`
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,        // Lower = more factual
      max_tokens: 800,
    });

    const reply = completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";

    res.json({ reply });

  } catch (error) {
    console.error("Groq Error:", error);
    res.status(500).json({ error: "AI service error. Please try again." });
  }
};

module.exports = { chatWithMoneedi };