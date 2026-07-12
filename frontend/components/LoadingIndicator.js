 export default function LoadingIndicator() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>🤖 Processing CSV with AI...</p>
      <p style={styles.subtext}>This may take a few moments</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    marginTop: '20px'
  },
  spinner: {
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #667eea',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite'
  },
  text: {
    marginTop: '20px',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#333'
  },
  subtext: {
    marginTop: '5px',
    fontSize: '0.9rem',
    color: '#888'
  }
};   
