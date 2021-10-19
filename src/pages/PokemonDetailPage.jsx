import React from "react";
import { useState, useEffect } from "react";
import { PokemonCard } from "../components/PokemonCard";
import { useParams } from "react-router";
import { PokemonNotFound } from "../components/PokemonNotFound";

export const PokemonDetailPage = () => {
  const { id } = useParams();
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    const fetchSelected = async () => {
      try {
        // console.log("fetch");
        const selectedData = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}/`
        );

        // console.log("before json");

        const selectedJson = await selectedData.json();

        // console.log("after json");

        setCurrentPokemon(selectedJson);

        // console.log("after set");
      } catch (err) {
        setErrorState(true);
      }
    };

    fetchSelected();
  }, [id]);

  if (errorState == true) {
    return <PokemonNotFound />;
  }

  return (
    <div>
      {currentPokemon && (
        <div>
          <PokemonCard
            name={currentPokemon.name}
            frontSrc={currentPokemon.sprites.front_default}
            backSrc={currentPokemon.sprites.back_default}
            height={currentPokemon.height}
            weight={currentPokemon.weight}
            types={currentPokemon.types}
            stats={currentPokemon.stats}
          />
        </div>
      )}
    </div>
  );
};
