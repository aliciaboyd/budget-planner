export default function BudgetSummary({ income, expenses, savings }) {
  let total = income - expenses - savings;

  return (
    <section className="summary">
      <h3>Summary</h3>
      <div className="totals">
        <table>
          <tbody>
            <tr>
              <td>Total income</td>
              <td>{income}</td>
            </tr>
            <tr>
              <td>Total expenses</td>
              <td>{expenses}</td>
            </tr>
            <tr>
              <td>Total savings</td>
              <td>{savings}</td>
            </tr>
          </tbody>
        </table>
        <p class="total-summary">${isNaN(total) ? "0" : total}</p>
        {<span></span>}
      </div>
    </section>
  );
}
