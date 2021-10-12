import { NavBar } from "./components/NavBar";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  const pokemons = [];

  const fetchData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
    pokemons.push(res);
  };
  fetchData();

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="row">
        {pokemons.map((element) => {
          return (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
              key={`pokemon-${element.id}`}
            >
              <PokemonCard
                prefix={element.id}
                name={element.name}
                imgSrc={element.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
