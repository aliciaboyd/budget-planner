import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="container">
        <span>Budget Planner</span>
        <div>
          <label htmlFor="currency">Currency:</label>
          <select name="currency" id="currency">
            <option value="">USD</option>
            <option value="">CAD</option>
            <option value="">AUD</option>
            <option value="">EUR</option>
          </select>
        </div>
      </div>
      <nav>
        <div className="container">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Overview
          </Link>
          <Link
            to="/expense-tracker"
            className={location.pathname === "/expense-tracker" ? "active" : ""}
          >
            Expense Tracker
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
