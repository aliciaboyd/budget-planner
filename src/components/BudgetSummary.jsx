export default function BudgetSummary({ income, expenses, savings }) {
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
        <p>${income - expenses - savings}</p>
        {<span></span>}
      </div>
    </section>
  );
}
