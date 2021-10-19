import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();

  return (
    <header className="d-flex justify-content-center py-3 navbar-dark bg-dark">
      <ul className="nav nav-pills">
        <li className="nav-item me-5">
          <Link
            to={"/"}
            className={`nav-link ${location.pathname == "/" ? "active" : ""}`}
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li className="nav-item me-5">
          <Link
            to={"/faq"}
            className={`nav-link ${
              location.pathname == "/faq" ? "active" : ""
            }`}
          >
            FAQs
          </Link>
        </li>
      </ul>
    </header>
  );
};
