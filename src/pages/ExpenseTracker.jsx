import BudgetCategory from "../components/BudgetCategory";
import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

export default function ExpenseTracker() {
  let currency = useContext(CurrencyContext);
  let initalValue = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : localStorage.setItem("expenses", JSON.stringify([]));

  const [expenseValues, setExpenseValues] = useState(initalValue);
  const [total, setTotal] = useState(0);

  function updateExpenseValues(x, y, z) {
    let toNum = parseFloat(y);
    setExpenseValues([...expenseValues, { category: x, amount: toNum, id: z }]);
  }

  function resetValues() {
    setExpenseValues([]);
  }

  function getTotals() {
    let tempTotal = 0;
    for (let i = 0; i < expenseValues.length; i++) {
      tempTotal += expenseValues[i].amount;
    }
    setTotal(tempTotal);
  }

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenseValues));
    getTotals();
  });

  return (
    <div>
      <div className="two-col expenses-col">
        <div>
          <h1>Expense tracker</h1>
          <p>Track expenses on this digital worksheet.</p>
        </div>
        <button className="secondary-btn" onClick={resetValues}>
          Clear All Expenses
        </button>
      </div>

      <div className="expense-summary">
        <h2>Summary</h2>
        <div>
          <span>Expenses total:</span>
          <span className="total-amount">
            {currency}
            {total}
          </span>
        </div>
      </div>

      <div className="wrapper-md">
        <BudgetCategory setValues={updateExpenseValues} />
        {expenseValues.map((item) => {
          return (
            <div key={item.id} className="row-container">
              <p>{item.category}</p>
              <p>
                {currency}
                {item.amount}
              </p>
              <button
                className="secondary-btn"
                onClick={() => {
                  setExpenseValues(
                    expenseValues.filter((obj) => {
                      return obj.id !== item.id;
                    })
                  );
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
