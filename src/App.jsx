import { NavBar } from "./components/NavBar";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div style={{ display: "flex" }}>
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  );
}

export default App;
