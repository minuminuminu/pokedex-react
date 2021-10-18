import { useEffect } from "react";

export const PokemonDetails = ({ id }) => {
  useEffect(() => {
    const fetchForId = async ({ id }) => {
      const rawDetail = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const jsonDetail = await rawDetail.json();
    };
  }, []);

  return <div></div>;
};
