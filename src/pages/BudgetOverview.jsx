import MonthlyBudgetForm from "../components/MonthlyBudgetForm";
import BudgetSummary from "../components/BudgetSummary";

function BudgetOverview(props) {
  return (
    <main>
      <h1>Monthly Budget Overview</h1>
      <p>
        Track, manage, and plan your bills and expenses on this digital
        worksheet.
      </p>
      <div className="budget-overview">
        <div className="two-col">
          <MonthlyBudgetForm currency={props.currency} />
          <BudgetSummary currency={props.currency}></BudgetSummary>
        </div>
      </div>
    </main>
  );
}

export default BudgetOverview;
