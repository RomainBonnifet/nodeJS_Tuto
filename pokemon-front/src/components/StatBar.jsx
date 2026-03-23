function StatBar({ label, valeur, max = 100, couleur = '#e63946' }) {
  const pourcentage = Math.min((valeur / max) * 100, 100)

  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '4px',
        fontSize: '14px',
      }}>
        <span style={{ fontWeight: '500' }}>{label}</span>
        <span style={{ color: '#666' }}>{valeur}</span>
      </div>
      <div style={{
        height: '8px',
        backgroundColor: '#eee',
        borderRadius: '4px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${pourcentage}%`,
          backgroundColor: couleur,
          borderRadius: '4px',
          transition: 'width 0.4s ease',
        }} />
      </div>
    </div>
  )
}

export default StatBar