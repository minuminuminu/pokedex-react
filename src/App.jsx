import { NavBar } from "./components/NavBar";
import { PokemonCard } from "./components/PokemonCard";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PokemonDetailPage } from "./pages/PokemonDetailPage";
import { BrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/details/:id">
            <PokemonDetailPage />
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
