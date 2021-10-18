import { NavBar } from "./components/NavBar";
import { PokemonCard } from "./components/PokemonCard";
import { useState, useEffect } from "react";

function App() {
  const [pokeNames, setPokeNames] = useState(null);
  const [pokeImage, setPokeImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      for (let i = 1; i < 6; i++) {
        const detailedData = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${i}/`
        );
        const detailedDataJson = await detailedData.json();
        console.log(detailedDataJson.forms[0].name);
        setPokeNames(detailedDataJson.forms[0].name);
        setPokeImage(detailedDataJson.sprites.front_default);
      }

      console.log(pokeNames);
    };

    fetchData();
  }, []);

  // pokeImage != null &&
  //   pokeImage.map(async (e) => {
  //     const tempUrl = await fetch(e);
  //     const tempJson = await tempUrl.json();
  //     console.log(tempJson.base_experience);
  //   });
  console.log(pokeNames);

  return (
    <div>
      <NavBar></NavBar>
      <div className="row">
        {pokeNames != null &&
          pokeNames.map((element) => {
            return (
              <div
                className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
                key={element}
              >
                <PokemonCard name={element} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
