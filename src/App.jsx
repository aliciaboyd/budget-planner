// import { useState } from "react";
import "./assets/App.css";
import Header from "./components/Header";
import BudgetOverview from "./pages/BudgetOverview";
import ExpenseTracker from "./pages/ExpenseTracker";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div class="content-body">
          <div className="container">
            <Routes>
              <Route path="/" element={<BudgetOverview />}></Route>
              <Route
                path="/expense-tracker"
                element={<ExpenseTracker />}
              ></Route>
            </Routes>
          </div>
        </div>
        <footer>
          <a href="https://github.com/aliciaboyd/budget-planner">Source Code</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
