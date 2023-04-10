import BudgetSummary from "../components/BudgetSummary";
import { useState, useEffect } from "react";
import InputGroup from "../components/InputGroup";

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

function BudgetOverview(props) {
  const [budget, setBudget] = useState(
    JSON.parse(localStorage.getItem("budget"))
  );

  const [total, setTotal] = useState({ income: 0, savings: 0, expenses: 0 });

  function setTotalIncome() {
    setTotal((prevTotal) => {
      let tempTotal = 0;
      for (let i = 0; i < budget.income.length; i++) {
        tempTotal += budget.income[i].amount;
      }
      return { ...prevTotal, income: tempTotal };
    });
  }
  function setTotalSavings() {
    setTotal((prevTotal) => {
      let tempTotal = 0;
      for (let i = 0; i < budget.savings.length; i++) {
        tempTotal += budget.savings[i].amount;
      }
      return { ...prevTotal, savings: tempTotal };
    });
  }
  function setTotalExpenses() {
    setTotal((prevTotal) => {
      let tempTotal = 0;
      for (let i = 0; i < budget.fixed.length; i++) {
        tempTotal += budget.fixed[i].amount;
      }
      for (let i = 0; i < budget.variable.length; i++) {
        tempTotal += budget.variable[i].amount;
      }
      for (let i = 0; i < budget.other.length; i++) {
        tempTotal += budget.other[i].amount;
      }
      return { ...prevTotal, expenses: tempTotal };
    });
  }

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
    setTotalIncome();
    setTotalSavings();
    setTotalExpenses();
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
          <BudgetSummary
            currency={props.currency}
            incomeTotal={total.income}
            savingsTotal={total.savings}
            expensesTotal={total.expenses}
          ></BudgetSummary>
        </div>
      </div>
    </main>
  );
}

export default BudgetOverview;
