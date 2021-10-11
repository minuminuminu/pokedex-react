import { NavBar } from "./components/NavBar";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  const pokemons = [
    {
      id: 1,
      name: "Bisasam",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: 2,
      name: "Bisaknosp",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
      id: 3,
      name: "Bisaflor",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    {
      id: 4,
      name: "Glumanda",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 5,
      name: "Glutexo",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    },
    {
      id: 6,
      name: "Glurak",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
    {
      id: 7,
      name: "Schiggy",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 8,
      name: "Schillok",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    },
    {
      id: 9,
      name: "Turtok",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    },
    {
      id: 25,
      name: "Pikachu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
  ];

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
