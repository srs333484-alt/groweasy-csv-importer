import { useState, useRef } from 'react';
import axios from 'axios';


// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const API_URL = 'https://gtwoeasy-csv-importers-1h3a.onrender.com';  // నేరుగా Render URL పెట్టండి

export default function CSVUploader({ onUpload }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      if (!selected.name.endsWith('.csv')) {
        setError('Please select a CSV file');
        setFile(null);
        return;
      }
      if (selected.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        setFile(null);
        return;
      }
      setFile(selected);
      setError(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (dropped) {
      if (!dropped.name.endsWith('.csv')) {
        setError('Please drop a CSV file');
        return;
      }
      if (dropped.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        return;
      }
      setFile(dropped);
      setError(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('csvFile', file);

    try {
      const response = await axios.post(`${API_URL}/api/csv/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (response.data.success) {
        onUpload(response.data);
      } else {
        setError(response.data.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setError(error.response?.data?.error || 'Failed to upload CSV. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div 
        style={styles.dropZone}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div style={styles.icon}>📁</div>
        <h3>Drop your CSV file here</h3>
        <p>or click to browse files</p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={styles.fileInput}
          id="fileInput"
        />
        <label htmlFor="fileInput" style={styles.browseBtn}>Browse Files</label>
        {file && (
          <p style={styles.fileName}>📄 Selected: {file.name}</p>
        )}
        <p style={styles.note}>Supported: .csv (max 10MB)</p>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      <button 
        onClick={handleUpload} 
        disabled={!file || uploading}
        style={{
          ...styles.uploadBtn,
          opacity: (!file || uploading) ? 0.6 : 1,
          cursor: (!file || uploading) ? 'not-allowed' : 'pointer'
        }}
      >
        {uploading ? '⏳ Uploading...' : '🚀 Upload & Preview'}
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '20px',
  },
  dropZone: {
    border: '2px dashed #667eea',
    borderRadius: '12px',
    padding: '40px 20px',
    textAlign: 'center',
    background: 'white',
    transition: 'all 0.3s',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '10px',
  },
  fileInput: {
    display: 'none',
  },
  browseBtn: {
    display: 'inline-block',
    background: '#667eea',
    color: 'white',
    padding: '10px 25px',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '15px',
    fontSize: '0.95rem',
    border: 'none',
  },
  fileName: {
    marginTop: '15px',
    fontWeight: '500',
    color: '#333',
  },
  note: {
    marginTop: '10px',
    fontSize: '0.85rem',
    color: '#888',
  },
  error: {
    color: '#dc3545',
    marginTop: '10px',
    padding: '10px',
    background: '#f8d7da',
    borderRadius: '6px',
    textAlign: 'center',
  },
  uploadBtn: {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginTop: '15px',
    transition: 'all 0.3s',
  },
};      }
      if (dropped.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        return;
      }
      setFile(dropped);
      setError(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('csvFile', file);

    try {
      const response = await axios.post(`${API_URL}/api/csv/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (response.data.success) {
        onUpload(response.data);
      } else {
        setError(response.data.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setError(error.response?.data?.error || 'Failed to upload CSV. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div 
        style={styles.dropZone}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div style={styles.icon}>📁</div>
        <h3>Drop your CSV file here</h3>
        <p>or click to browse files</p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={styles.fileInput}
          id="fileInput"
        />
        <label htmlFor="fileInput" style={styles.browseBtn}>Browse Files</label>
        {file && (
          <p style={styles.fileName}>📄 Selected: {file.name}</p>
        )}
        <p style={styles.note}>Supported: .csv (max 10MB)</p>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      <button 
        onClick={handleUpload} 
        disabled={!file || uploading}
        style={{
          ...styles.uploadBtn,
          opacity: (!file || uploading) ? 0.6 : 1,
          cursor: (!file || uploading) ? 'not-allowed' : 'pointer'
        }}
      >
        {uploading ? '⏳ Uploading...' : '🚀 Upload & Preview'}
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '20px',
  },
  dropZone: {
    border: '2px dashed #667eea',
    borderRadius: '12px',
    padding: '40px 20px',
    textAlign: 'center',
    background: 'white',
    transition: 'all 0.3s',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '10px',
  },
  fileInput: {
    display: 'none',
  },
  browseBtn: {
    display: 'inline-block',
    background: '#667eea',
    color: 'white',
    padding: '10px 25px',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '15px',
    fontSize: '0.95rem',
    border: 'none',
  },
  fileName: {
    marginTop: '15px',
    fontWeight: '500',
    color: '#333',
  },
  note: {
    marginTop: '10px',
    fontSize: '0.85rem',
    color: '#888',
  },
  error: {
    color: '#dc3545',
    marginTop: '10px',
    padding: '10px',
    background: '#f8d7da',
    borderRadius: '6px',
    textAlign: 'center',
  },
  uploadBtn: {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginTop: '15px',
    transition: 'all 0.3s',
  },
};
