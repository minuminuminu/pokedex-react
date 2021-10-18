import { NavBar } from "./components/NavBar";
import { PokemonCard } from "./components/PokemonCard";
import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [pokeImage, setPokeImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5");
      const data = await res.json();
      const detailedData = await fetch(data.results[0].url);
      const data2 = await detailedData.json();

      setPokeImage(data2.sprites.front_default);
      setPokemons(data.results);
    };

    fetchData();
  }, []);

  console.log(pokemons);
  console.log(pokeImage);

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="row">
        {pokemons != null &&
          pokemons.map((element) => {
            return (
              <div
                className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
                key={`pokemon-${element.name}`}
              >
                <PokemonCard name={element.name} img={pokeImage} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
