import { NavBar } from "./components/NavBar";
import { PokemonCard } from "./components/PokemonCard";
import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  // lifecycle
  // 1) bevor render
  // 2) render done ---- componentDidMount()
  // 3) on destroy
  // 4) destroy

  useEffect(() => {
    const fetchData = async () => {
      const pokemonsData = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10`
      );
      const datafromJson = await pokemonsData.json();

      const fakePokemons = datafromJson.results;
      const realPokemons = [];

      for (let index = 0; index < fakePokemons.length; index++) {
        realPokemons.push({
          name: fakePokemons[index].name,
          url: fakePokemons[index].url,
          id: index + 1,
        });
      }

      setPokemons(realPokemons);
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchSelected = async () => {
      if (selectedId == null) {
        return;
      }

      const selectedData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${selectedId}/`
      );
      const selectedJson = await selectedData.json();

      setCurrentPokemon(selectedJson);
    };

    fetchSelected();
  }, [selectedId]);

  return (
    <div>
      <NavBar />
      <h1>Pokemons</h1>
      <div>
        {pokemons.map((onePokemon) => {
          return (
            <img
              key={`pokemon-${onePokemon.id}`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${onePokemon.id}.png`}
              onClick={() => {
                setSelectedId(onePokemon.id);
              }}
            />
          );
        })}
      </div>

      {currentPokemon && (
        <div>
          <PokemonCard
            name={currentPokemon.name}
            frontSrc={currentPokemon.sprites.front_default}
            backSrc={currentPokemon.sprites.back_default}
            height={currentPokemon.height}
            weight={currentPokemon.weight}
            types={currentPokemon.types}
            stats={currentPokemon.stats}
          />
        </div>
      )}
    </div>
  );
}

export default App;
