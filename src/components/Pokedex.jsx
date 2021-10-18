import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonsData = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=898`
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

  return (
    <div className="container">
      <h1>Pokedex</h1>
      <div>
        {pokemons.map((onePokemon) => {
          return (
            <Link
              to={`/details/${onePokemon.id}`}
              key={`pokemon-${onePokemon.id}`}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${onePokemon.id}.png`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
