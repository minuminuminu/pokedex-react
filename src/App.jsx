import { NavBar } from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PokemonDetailPage } from "./pages/PokemonDetailPage";
import { BrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { FaqPage } from "./pages/FaqPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/details/:id">
            <PokemonDetailPage />
          </Route>
          <Route path="/faq">
            <FaqPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
