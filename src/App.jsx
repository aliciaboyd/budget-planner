// import { useState } from "react";
import "./assets/App.css";
import Header from "./components/Header";
import BudgetOverview from "./pages/BudgetOverview";
import ExpenseTracker from "./pages/ExpenseTracker";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrencyContext } from "./context/CurrencyContext";

function App() {
  const [currency, setCurrency] = useState("$");

  useEffect(() => {
    localStorage.getItem("currency") !== "null"
      ? setCurrency(localStorage.getItem("currency"))
      : setCurrency("$");
  }, []);

  return (
    <BrowserRouter>
      <CurrencyContext.Provider value={currency}>
        <div className="App">
          <Header currency={currency} setCurrency={setCurrency} />

          <main className="content-body">
            <div className="container">
              <Routes>
                <Route
                  path="/"
                  element={<BudgetOverview currency={currency} />}
                />
                <Route
                  path="/tracker"
                  element={<ExpenseTracker currency={currency} />}
                />
              </Routes>
            </div>
          </main>

          <footer>
            <a href="https://github.com/aliciaboyd/budget-planner">
              Source Code
            </a>
          </footer>
        </div>
      </CurrencyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
