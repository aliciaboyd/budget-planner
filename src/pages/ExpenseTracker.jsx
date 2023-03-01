import BudgetCategory from "../components/BudgetCategory";
import { useState } from "react";

export default function ExpenseTracker() {
  const [expenseValues, setExpenseValues] = useState([]);

  function updateExpenseValues(x, y, z) {
    setExpenseValues([...expenseValues, { category: x, amount: y, id: z }]);
  }

  return (
    <div>
      <h1>Expense tracker</h1>
      <p>Track expenses on this digital worksheet.</p>
      <BudgetCategory setValues={updateExpenseValues} />
      {expenseValues.map((item) => {
        return (
          <div key={item.id} className="row-container">
            <p>{item.category}</p>
            <p>{item.amount}</p>
            <button
              className="delete"
              onClick={() => {
                setExpenseValues(
                  expenseValues.filter((obj) => {
                    return obj.id !== item.id;
                  })
                );
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
