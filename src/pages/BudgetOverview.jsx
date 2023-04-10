import BudgetSummary from "../components/BudgetSummary";
import { useState, useEffect } from "react";
import InputGroup from "../components/InputGroup";

function BudgetOverview(props) {
  if (localStorage.getItem("budget") === null) {
    localStorage.setItem(
      "budget",
      JSON.stringify({
        income: [],
        savings: [],
        fixed: [],
        variable: [],
        other: [],
      })
    );
  }

  const [budget, setBudget] = useState(
    JSON.parse(localStorage.getItem("budget"))
  );

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget]);

  function addItem(newItem, category) {
    setBudget((prevBudget) => {
      const newBudget = { ...prevBudget };
      newBudget[category].push(newItem);
      return newBudget;
    });
  }

  function removeItem(itemId, category) {
    setBudget((prevBudget) => {
      let newCategory = prevBudget[category].filter(
        (item) => item.id !== itemId
      );
      return {
        ...prevBudget,
        [category]: newCategory,
      };
    });
  }

  return (
    <main>
      <h1>Monthly Budget Overview</h1>
      <p>
        Track, manage, and plan your bills and expenses on this digital
        worksheet.
      </p>
      <div className="budget-overview">
        <div className="two-col">
          <div>
            <div className="category">
              <h3>Income</h3>
              <InputGroup category={"income"} addItem={addItem} />
              {budget.income.length > 0 &&
                budget.income.map((item) => {
                  return (
                    <div key={item.id} className="row-container">
                      <p>{item.category}</p>
                      <p>
                        {props.currency}
                        {item.amount}
                      </p>
                      <button
                        className="secondary-btn"
                        onClick={() => removeItem(item.id, "income")}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="category">
              <h3>Savings</h3>
              <InputGroup category={"savings"} addItem={addItem} />
              {budget.savings.length > 0 &&
                budget.savings.map((item) => {
                  return (
                    <div key={item.id} className="row-container">
                      <p>{item.category}</p>
                      <p>
                        {props.currency}
                        {item.amount}
                      </p>
                      <button
                        className="secondary-btn"
                        onClick={() => removeItem(item.id, "savings")}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="category">
              <h3>Fixed Expenses</h3>
              <InputGroup category={"fixed"} addItem={addItem} />
              {budget.fixed.length > 0 &&
                budget.fixed.map((item) => {
                  return (
                    <div key={item.id} className="row-container">
                      <p>{item.category}</p>
                      <p>
                        {props.currency}
                        {item.amount}
                      </p>
                      <button
                        className="secondary-btn"
                        onClick={() => removeItem(item.id, "fixed")}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="category">
              <h3>Variable Expenses</h3>
              <InputGroup category={"variable"} addItem={addItem} />
              {budget.variable.length > 0 &&
                budget.variable.map((item) => {
                  return (
                    <div key={item.id} className="row-container">
                      <p>{item.category}</p>
                      <p>
                        {props.currency}
                        {item.amount}
                      </p>
                      <button
                        className="secondary-btn"
                        onClick={() => removeItem(item.id, "variable")}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="category">
              <h3>Other Expenses</h3>
              <InputGroup category={"other"} addItem={addItem} />
              {budget.other.length > 0 &&
                budget.other.map((item) => {
                  return (
                    <div key={item.id} className="row-container">
                      <p>{item.category}</p>
                      <p>
                        {props.currency}
                        {item.amount}
                      </p>
                      <button
                        className="secondary-btn"
                        onClick={() => removeItem(item.id, "other")}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
          <BudgetSummary currency={props.currency}></BudgetSummary>
        </div>
      </div>
    </main>
  );
}

export default BudgetOverview;
