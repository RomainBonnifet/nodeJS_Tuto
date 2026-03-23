import StatBar from './StatBar'

function PokemonDetail({ pokemon }) {
  if (!pokemon) return <div>Chargement...</div>

  const types = Array.isArray(pokemon.types)
    ? pokemon.types
    : JSON.parse(pokemon.types)

  return (
    <div style={{
      flex: 1,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      boxSizing: 'border-box',
    }}>
      <img
        src={pokemon.picture}
        alt={pokemon.name}
        style={{
          width: '220px',
          height: '220px',
          objectFit: 'contain',
        }}
      />

      <h1 style={{ margin: '16px 0 8px', textTransform: 'capitalize' }}>
        {pokemon.name}
      </h1>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
        {types.map(type => (
          <span key={type} style={{
            padding: '4px 16px',
            borderRadius: '20px',
            backgroundColor: '#f0f0f0',
            fontSize: '14px',
            fontWeight: '500',
          }}>
            {type}
          </span>
        ))}
      </div>

      <div style={{ width: '100%', maxWidth: '400px' }}>
        <StatBar label="HP" valeur={pokemon.hp} max={200} couleur="#4caf50" />
        <StatBar label="CP" valeur={pokemon.cp} max={50} couleur="#e63946" />
      </div>
    </div>
  )
}

export default PokemonDetail