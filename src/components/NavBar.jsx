export const NavBar = () => {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            All Pokemons
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            FAQs
          </a>
        </li>
      </ul>
    </header>
  );
};
