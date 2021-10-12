export const PokemonCard = ({ name }) => {
  return (
    <div
      className="border d-flex justify-content-center bg-light"
      style={{ width: "150px", height: "150px" }}
    >
      <figure className="figure">
        <figcaption className="figure-caption text-center">{name}</figcaption>
      </figure>
    </div>
  );
};
