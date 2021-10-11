export const PokemonCard = () => {
  return (
    <div
      className="border d-flex justify-content-center bg-light"
      style={{ width: "150px", height: "150px" }}
    >
      <figure className="figure">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          className="figure-img img-fluid rounded "
          alt="Pikachu"
        />
        <figcaption className="figure-caption text-center">Pikachu</figcaption>
      </figure>
    </div>
  );
};
