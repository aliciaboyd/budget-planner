import { useEffect, useRef } from "react";

export default function BudgetSummary({ income, expenses, savings }) {
  // let total = income - expenses - savings;

  let incomeRef = useRef(null);

  // useEffect(() => {
  //   if (income === []) {
  //     return;
  //   }
  //   incomeRef.current.value = sumOfCategory(income);
  // }, [income]);

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
                $<span ref={incomeRef}></span>
              </td>
            </tr>
            <tr>
              <td>Total expenses</td>
              <td className="right">${expenses}</td>
            </tr>
            <tr>
              <td>Total savings</td>
              <td className="right">${savings}</td>
            </tr>
          </tbody>
        </table>
        <p className="total-summary">$</p>
        {<span></span>}
      </div>
    </section>
  );
}

function sumOfCategory(categoryArr) {
  let total = 0;

  if (categoryArr !== []) {
    for (let i = 0; i > categoryArr.length; i++) {
      total = total + categoryArr.amount;
    }
  } else {
    return total;
  }
}
