import { NavBar } from "./components/NavBar";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  let array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="row">
        {array.map((element) => {
          return (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
              key={`pokemon-${element}`}
            >
              <PokemonCard prefix={element} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
