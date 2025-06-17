import React from 'react';
import { useState } from 'react';
import { useAuth } from '../components/AuthContext';
import { Loader2, Copy, Save, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';

export const GenPlanPage = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const { userId } = useAuth();
  const { savedPlan } = useAuth();

  const generatePrompt = async () => {
    setIsLoading(true);
    setError('');
    setMessage('');
    setSaved(false);

    try {
      const response = await fetch('http://localhost:5000/generateplan', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId
        })
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setMessage(data.plan);
    } catch (err) {
      setError('Server is facing GoogleGenerativeAI Error');
      console.error('Error generating plan:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const copyPlan = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy plan to clipboard');
    }
  };

  const savePlan = () => {
    try {
      savedPlan(message);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      setError('Failed to save plan. Please try again.');
    }
  };

  const containerStyle = {
  height: '100vh',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: '20px',
  fontFamily: 'Poppins, Arial, sans-serif',
  zIndex: 1,
  width: '100%',
  boxSizing: 'border-box',
  overflowY: 'auto' // in case card is bigger than viewport
};

  const mainCardStyle = {
    maxWidth: '800px',
    maxHeight:'600px !important',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: '40px',
    zIndex: 2,
    boxSizing: 'border-box'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px'
  };

  const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '10px'
  };

  const subtitleStyle = {
    color: '#6b7280',
    fontSize: '1.1rem',
    margin: 0
  };

  const planDisplayStyle = {
    minHeight: '350px',
    backgroundColor: '#f9fafb',
    borderRadius: '15px',
    padding: '30px',
    border: '3px dashed #d1d5db',
    marginBottom: '30px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    boxSizing:'border-box'
  };

  const loadingOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    borderRadius: '15px'
  };

  const loadingContentStyle = {
    textAlign: 'center'
  };

  const loadingTextStyle = {
    fontSize: '1.2rem',
    color: '#4f46e5',
    fontWeight: '600',
    marginTop: '15px'
  };

  const emptyStateStyle = {
    textAlign: 'center',
    color: '#9ca3af'
  };

  const planContentStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#374151',
    whiteSpace: 'pre-wrap'
  };

  const errorStyle = {
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const errorTextStyle = {
    color: '#dc2626',
    fontSize: '1rem',
    margin: 0
  };

  const successStyle = {
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const successTextStyle = {
    color: '#059669',
    fontSize: '1rem',
    margin: 0
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    flexWrap: 'wrap'
  };

  const baseButtonStyle = {
    padding: '12px 24px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    minWidth: '140px',
    justifyContent: 'center'
  };

  const primaryButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: '#4f46e5',
    color: 'white',
    boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)'
  };

  const secondaryButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: '#e5e7eb',
    color: '#374151',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
  };

  const disabledButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: '#d1d5db',
    color: '#9ca3af',
    cursor: 'not-allowed'
  };

  return (
    <div style={containerStyle}>
      <div style={mainCardStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>
            <Sparkles size={32} color="#4f46e5" />
            Fitness Plan Generator
          </h1>
          <p style={subtitleStyle}>Create a personalized fitness plan tailored just for you</p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={errorStyle}>
            <AlertCircle size={20} color="#dc2626" />
            <p style={errorTextStyle}>{error}</p>
          </div>
        )}

        {/* Success Message */}
        {saved && (
          <div style={successStyle}>
            <CheckCircle size={20} color="#059669" />
            <p style={successTextStyle}>Plan saved successfully! View it in the 'Plan Details' section.</p>
          </div>
        )}

        {copied && (
          <div style={successStyle}>
            <CheckCircle size={20} color="#059669" />
            <p style={successTextStyle}>Plan copied to clipboard!</p>
          </div>
        )}

        {/* Plan Display Area */}
        <div style={planDisplayStyle}>
          {isLoading && (
            <div style={loadingOverlayStyle}>
              <div style={loadingContentStyle}>
                <Loader2 size={48} color="#4f46e5" style={{ animation: 'spin 1s linear infinite' }} />
                <p style={loadingTextStyle}>Generating your personalized fitness plan...</p>
              </div>
            </div>
          )}

          {!message && !isLoading && (
            <div style={emptyStateStyle}>
              <Sparkles size={64} color="#d1d5db" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#6b7280' }}>
                Ready to Get Fit?
              </h3>
              <p style={{ fontSize: '1.1rem', margin: 0 }}>
                Click the button below to generate your personalized fitness plan
              </p>
            </div>
          )}

          {message && !isLoading && (
            <div style={planContentStyle}>
              <h3 style={{ color: '#1f2937', marginBottom: '20px', fontSize: '1.3rem' }}>
                Your Personalized Fitness Plan
              </h3>
              {message}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={buttonContainerStyle}>
          <button
            style={message && !isLoading ? secondaryButtonStyle : disabledButtonStyle}
            onClick={copyPlan}
            disabled={!message || isLoading}
            onMouseOver={(e) => {
              if (message && !isLoading) {
                e.target.style.backgroundColor = '#d1d5db';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseOut={(e) => {
              if (message && !isLoading) {
                e.target.style.backgroundColor = '#e5e7eb';
                e.target.style.transform = 'translateY(0px)';
              }
            }}
          >
            <Copy size={18} />
            Copy Plan
          </button>

          <button
            style={isLoading ? disabledButtonStyle : primaryButtonStyle}
            onClick={generatePrompt}
            disabled={isLoading}
            onMouseOver={(e) => {
              if (!isLoading) {
                e.target.style.backgroundColor = '#4338ca';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(79, 70, 229, 0.4)';
              }
            }}
            onMouseOut={(e) => {
              if (!isLoading) {
                e.target.style.backgroundColor = '#4f46e5';
                e.target.style.transform = 'translateY(0px)';
                e.target.style.boxShadow = '0 4px 15px rgba(79, 70, 229, 0.3)';
              }
            }}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                Generating...
              </>
            ) : (
              <>
                <Sparkles size={18} />
                Generate New Plan
              </>
            )}
          </button>

          <button
            style={message && !isLoading ? secondaryButtonStyle : disabledButtonStyle}
            onClick={savePlan}
            disabled={!message || isLoading}
            onMouseOver={(e) => {
              if (message && !isLoading) {
                e.target.style.backgroundColor = '#d1d5db';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseOut={(e) => {
              if (message && !isLoading) {
                e.target.style.backgroundColor = '#e5e7eb';
                e.target.style.transform = 'translateY(0px)';
              }
            }}
          >
            <Save size={18} />
            Save Plan
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          * {
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};