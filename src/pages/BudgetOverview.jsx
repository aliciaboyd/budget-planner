// import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// function Input() {
//   return (
//     <>
//       <div className="input-group">
//         <input placeholder="Source" type="text"></input>
//         <input placeholder="Amount" type="number"></input>
//         <button className="delete">-</button>
//       </div>
//     </>
//   );
// }

function Category({ category, children }) {
  return (
    <div id="income" className="income category">
      <h3>{category}</h3>
      {children}
      <button className="secondary-btn">Add Row</button>
    </div>
  );
}

function BudgetOverview() {
  function newId() {
    return uuidv4();
  }

  return (
    <div>
      <h1>Monthly Budget Overview</h1>
      <p>
        Track, manage, and plan your bills and expenses on this digital
        worksheet.
      </p>
      <form className="budget-overview" onSubmit={(e) => e.preventDefault()}>
        <Category category="Income"></Category>
        <Category category="Savings"></Category>
        <Category category="Fixed Expenses"></Category>
        <Category category="Variable Expenses"></Category>
        <Category category="Other"></Category>
      </form>
    </div>
  );
}

export default BudgetOverview;
