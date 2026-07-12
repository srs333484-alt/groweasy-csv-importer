export default function CSVPreview({ data, totalRows }) {
  if (!data || data.length === 0) {
    return <p>No data to preview</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>📊 Preview</h2>
        <span style={styles.rowCount}>Showing {data.length} of {totalRows || data.length} rows</span>
      </div>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} style={styles.th}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex} style={styles.td}>
                    {row[header] || ''}
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
    marginBottom: '15px',
    flexWrap: 'wrap',
  },
  rowCount: {
    background: '#f0f2f5',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#555',
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
    whiteSpace: 'nowrap',
    zIndex: 1,
  },
  td: {
    padding: '10px 15px',
    borderBottom: '1px solid #eee',
    maxWidth: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};
