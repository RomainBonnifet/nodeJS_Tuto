import { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonActif, setPokemonActif] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3000/api/pokemons", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.data);
        setPokemonActif(data.data[0]);
        console.log(`Réponse API: ${JSON.stringify(data)} `);
      });
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <PokemonList
        pokemons={pokemons}
        pokemonActif={pokemonActif}
        onSelect={setPokemonActif}
      />
      <PokemonDetail pokemon={pokemonActif} />
    </div>
  );
}

export default App;
