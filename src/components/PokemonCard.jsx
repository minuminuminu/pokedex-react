export const PokemonCard = ({ prefix, name, imgSrc }) => {
  return (
    <div
      className="border d-flex justify-content-center bg-light"
      style={{ width: "150px", height: "150px" }}
    >
      <figure className="figure">
        <img
          src={imgSrc}
          className="figure-img img-fluid rounded "
          alt="Pikachu"
        />
        <figcaption className="figure-caption text-center">
          #{prefix} {name}
        </figcaption>
      </figure>
    </div>
  );
};
