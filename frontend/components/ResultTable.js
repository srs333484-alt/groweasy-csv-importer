export default function ResultTable({ results, onReset }) {
  const fields = ['name', 'email', 'mobile_without_country_code', 'crm_status', 'crm_note'];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>📋 Import Results</h2>
        <button onClick={onReset} style={styles.resetBtn}>🔄 Import Another CSV</button>
      </div>
      
      <div style={styles.summary}>
        <div style={styles.stat}>
          <span style={styles.statLabel}>Total Records</span>
          <span style={styles.statValue}>{results.total}</span>
        </div>
        <div style={{...styles.stat, background: '#d4edda'}}>
          <span style={styles.statLabel}>✅ Imported</span>
          <span style={{...styles.statValue, color: '#155724'}}>{results.imported}</span>
        </div>
        <div style={{...styles.stat, background: '#f8d7da'}}>
          <span style={styles.statLabel}>⏭️ Skipped</span>
          <span style={{...styles.statValue, color: '#721c24'}}>{results.skipped}</span>
        </div>
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              {fields.map((field) => (
                <th key={field} style={styles.th}>
                  {field.replace(/_/g, ' ').toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.records.map((record, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                <td style={styles.td}>{index + 1}</td>
                {fields.map((field) => (
                  <td key={field} style={styles.td}>
                    {record[field] || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginTop: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  resetBtn: {
    background: '#6c757d',
    color: 'white',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  summary: {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  stat: {
    flex: 1,
    minWidth: '100px',
    background: '#e9ecef',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  statLabel: {
    display: 'block',
    fontSize: '0.8rem',
    color: '#666',
  },
  statValue: {
    display: 'block',
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#333',
  },
  tableWrapper: {
    overflow: 'auto',
    maxHeight: '400px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.9rem',
  },
  th: {
    position: 'sticky',
    top: 0,
    background: '#f5f5f5',
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
    fontWeight: '600',
    zIndex: 1,
  },
  td: {
    padding: '10px 15px',
    borderBottom: '1px solid #eee',
  },
  rowEven: {
    background: '#fafafa',
  },
  rowOdd: {
    background: 'white',
  },
};
