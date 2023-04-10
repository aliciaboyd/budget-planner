import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();

  function updateCurrency(event) {
    props.setCurrency(event.target.value);

    event.target.value !== "--Select--" &&
      localStorage.setItem("currency", event.target.value);
  }

  return (
    <header>
      <div className="container">
        <span>Budget Planner</span>
        <div>
          <label htmlFor="currency">Currency:</label>
          <select
            name="currency"
            id="currency"
            onChange={(e) => updateCurrency(e)}
          >
            <option>--Select--</option>
            <option value="$">DOLLAR</option>
            <option value="€">EURO</option>
          </select>
        </div>
      </div>
      <nav>
        <div className="container">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Monthly Overview
          </Link>
          <Link
            to="/tracker"
            className={location.pathname === "/tracker" ? "active" : ""}
          >
            Monthly Tracker
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
