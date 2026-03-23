function PokemonCard({ pokemon, estActif, onSelect }) {
  return (
    <div
      onClick={() => onSelect(pokemon)}
      style={{
        cursor: 'pointer',
        border: estActif ? '2px solid #141414' : '2px solid transparent',
        borderRadius: '8px',
        padding: '4px',
        backgroundColor: estActif ? '#ffffff' : 'transparent',
        transition: 'all 0.2s',
      }}
    >
      <img
        src={pokemon.picture}
        alt={pokemon.name}
        style={{ width: '100%', aspectRatio: '1', objectFit: 'contain' }}
      />
    </div>
  )
}

export default PokemonCard