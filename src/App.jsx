import { NavBar } from "./components/NavBar";
import { PokemonCard } from "./components/PokemonCard";
import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
      const data = await res.json();
      const pokemons1 = data.results;
      const pokemons2 = pokemons1.map((element) => {});

      setPokemons(data.results);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="row">
        {pokemons != null &&
          pokemons.map((element) => {
            return (
              <div
                className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
                key={`pokemon`}
              >
                <PokemonCard name={element.name} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
