import { useState } from 'react'
import PokemonCard from './PokemonCard'

function PokemonList({ pokemons, pokemonActif, onSelect }) {
  const [recherche, setRecherche] = useState('')

  const pokemonsFiltres = pokemons.filter(p =>
    p.name.toLowerCase().includes(recherche.toLowerCase())
  )

  return (
    <div style={{
      width: '340px',
      minWidth: '340px',
      height: '100vh',
      overflowY: 'auto',
      borderRight: '1px solid #eee',
      padding: '16px',
      boxSizing: 'border-box',
    }}>
      <h2 style={{ marginTop: 0 }}>Pokédex</h2>

      <input
        type="text"
        placeholder="🔍 Rechercher..."
        value={recherche}
        onChange={e => setRecherche(e.target.value)}
        style={{
          width: '100%',
          padding: '8px 12px',
          borderRadius: '20px',
          border: '1px solid #ddd',
          marginBottom: '16px',
          boxSizing: 'border-box',
          fontSize: '14px',
        }}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '8px',
      }}>
        {pokemonsFiltres.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            estActif={pokemonActif?.id === pokemon.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default PokemonList