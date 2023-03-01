// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import BudgetForm from "../components/BudgetForm";

function BudgetOverview() {
  return (
    <main>
      <h1>Monthly Budget Overview</h1>
      <p>
        Track, manage, and plan your bills and expenses on this digital
        worksheet.
      </p>
      <div className="budget-overview">
        <BudgetForm />
      </div>
    </main>
  );
}

export default BudgetOverview;
