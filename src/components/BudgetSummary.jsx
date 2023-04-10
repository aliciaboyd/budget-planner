import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

export default function BudgetSummary(props) {
  const symbol = useContext(CurrencyContext);
  const remainder =
    props.incomeTotal - props.expensesTotal - props.savingsTotal;

  return (
    <section className="summary">
      <h3>Summary</h3>
      <div className="totals">
        <table>
          <tbody>
            <tr>
              <td>Total income</td>
              {/* <td className="right">${income}</td> */}
              <td className="right">
                {symbol}
                <span>{props.incomeTotal}</span>
              </td>
            </tr>
            <tr>
              <td>Total expenses</td>
              <td className="right">
                {symbol}
                <span>{props.expensesTotal}</span>
              </td>
            </tr>
            <tr>
              <td>Total savings</td>
              <td className="right">
                {symbol}

                <span>{props.savingsTotal}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="total-summary">
          {symbol}
          {remainder}
          {remainder !== 0 && (
            <span className={remainder >= 0 ? "positive" : "negative"}>
              {remainder > 0 ? "Positve Net Total" : "Negative Net Total"}
            </span>
          )}
        </p>
      </div>
    </section>
  );
}
