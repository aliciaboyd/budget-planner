import { useEffect, useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

export default function BudgetSummary(props) {
  const symbol = useContext(CurrencyContext);

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
                <span></span>
              </td>
            </tr>
            <tr>
              <td>Total expenses</td>
              <td className="right">{symbol}</td>
            </tr>
            <tr>
              <td>Total savings</td>
              <td className="right">{symbol}</td>
            </tr>
          </tbody>
        </table>
        <p className="total-summary">{symbol}</p>
        {<span></span>}
      </div>
    </section>
  );
}
