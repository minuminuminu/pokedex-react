export const PokemonCard = ({
  name,
  frontSrc,
  backSrc,
  height,
  weight,
  types,
  stats,
}) => {
  return (
    <div className="border d-flex justify-content-center bg-light">
      <figure className="figure">
        <div>
          <img src={frontSrc} />
          <img src={backSrc} />
        </div>

        <figcaption className="figure-caption text-center text-capitalize">
          {name}
        </figcaption>
      </figure>
      <p>Types: </p>
      {types.map((type) => {
        return <div key={type.slot}>{type.type.name}</div>;
      })}
      <p>Height: {height / 10} m</p>
      <p>Weight: {weight / 10} kg</p>
      {stats.map((stat) => {
        return (
          <p key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </p>
        );
      })}
    </div>
  );
};
