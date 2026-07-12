        import { useState } from 'react';
import CSVUploader from '../components/CSVUploader';
import CSVPreview from '../components/CSVPreview';
import ResultTable from '../components/ResultTable';
import LoadingIndicator from '../components/LoadingIndicator';

const API_URL = 'https://groweasy-csv-importer-1h3a.onrender.com';

export default function Home() {
  const [step, setStep] = useState(1);
  const [csvData, setCsvData] = useState(null);
  const [previewData, setPreviewData] = useState([]);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = (data) => {
    setCsvData(data);
    setPreviewData(data.preview);
    setStep(2);
    setError(null);
  };

  const handleConfirm = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/csv/process`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ records: csvData.records })
      });
      const result = await response.json();
      if (result.success) {
        setResults(result);
        setStep(3);
      } else {
        setError(result.error || 'Failed to process CSV');
      }
    } catch (error) {
      console.error('Processing error:', error);
      setError('Failed to connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setCsvData(null);
    setPreviewData([]);
    setResults(null);
    setError(null);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🚀 GrowEasy CSV Importer</h1>
        <p style={styles.subtitle}>AI-powered CSV to CRM lead converter</p>
      </header>
      
      <main style={styles.main}>
        {error && (
          <div style={styles.error}>
            ⚠️ {error}
            <button onClick={handleReset} style={styles.retryBtn}>Retry</button>
          </div>
        )}
        
        {step === 1 && (
          <CSVUploader onUpload={handleUpload} />
        )}
        
        {step === 2 && (
          <>
            <CSVPreview data={previewData} totalRows={csvData?.totalRows} />
            <div style={styles.actions}>
              <button onClick={handleReset} style={styles.cancelBtn}>Cancel</button>
              <button 
                onClick={handleConfirm} 
                disabled={loading}
                style={styles.confirmBtn}
              >
                {loading ? 'Processing...' : '✅ Confirm Import'}
              </button>
            </div>
          </>
        )}
        
        {loading && <LoadingIndicator />}
        
        {step === 3 && results && (
          <ResultTable results={results} onReset={handleReset} />
        )}
      </main>
      
      <footer style={styles.footer}>
        <p>© 2026 GrowEasy - CSV Importer Assignment</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#f0f2f5',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '2.5rem',
    fontWeight: '700',
  },
  subtitle: {
    margin: '10px 0 0',
    opacity: 0.9,
    fontSize: '1.1rem',
  },
  main: {
    flex: 1,
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '20px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px',
    padding: '20px',
  },
  confirmBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '12px 40px',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  cancelBtn: {
    background: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  error: {
    background: '#f8d7da',
    color: '#721c24',
    padding: '15px 20px',
    borderRadius: '8px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  retryBtn: {
    background: '#721c24',
    color: 'white',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    color: '#666',
    borderTop: '1px solid #ddd',
    background: 'white',
  },
};
