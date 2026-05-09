import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './ForgotPassword.module.css';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const validateEmail = (): boolean => {
    if (!email) {
      setError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail()) {
      toast.error('Please enter a valid email', {
        position: 'top-center',
        autoClose: 4000,
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call (replace with your actual forgot password API)
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubmitted(true);

      toast.success('Password reset link has been sent to your email!', {
        position: 'top-center',
        autoClose: 6000,
      });

    } catch (err) {
      toast.error('Something went wrong. Please try again.', {
        position: 'top-center',
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Forgot Password?</h1>
        
        {!isSubmitted ? (
          <>
            <p className={styles.subtitle}>
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  className={error ? styles.inputError : ''}
                  placeholder="you@example.com"
                  disabled={isLoading}
                />
                {error && <span className={styles.errorText}>{error}</span>}
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
              </button>

              <p className={styles.backToLogin}>
                Remember your password? <Link to="/customer-login">Sign in</Link>
              </p>
            </form>
          </>
        ) : (
          // Success State
          <div className={styles.successContainer}>
            <div className={styles.successIcon}>✅</div>
            <h2 className={styles.successTitle}>Check Your Email</h2>
            <p className={styles.successMessage}>
              We've sent a password reset link to <strong>{email}</strong>.<br />
              Please check your inbox (and spam folder).
            </p>
            <button 
              onClick={() => window.location.href = '/customer-login'}
              className={styles.submitButton}
            >
              Return to Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;