import { NavBar } from "./components/NavBar";
import { PokemonCard } from "./components/PokemonCard";
import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [pokeImage, setPokeImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dataMapUrl = [];
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5");
      const data = await res.json();
      for (let i = 0; i < data.results.length; i++) {
        dataMapUrl.push(data.results[i].url);
      }

      setPokemons(data.results);
      setPokeImage(dataMapUrl);
    };

    fetchData();
  }, []);

  // console.log(Array.isArray(pokeImage));
  pokeImage != null &&
    pokeImage.map(async (e) => {
      const tempUrl = await fetch(e);
      const tempJson = await tempUrl.json();
      console.log(tempJson.base_experience);
    });

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
                <PokemonCard name={element.name} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
