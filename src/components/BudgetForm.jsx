import { useState } from "react";
import BudgetCategory from "./BudgetCategory";
import BudgetSummary from "./BudgetSummary";

function Category({ category, children }) {
  return (
    <div id="income" className="income category">
      <h3>{category}</h3>
      {children}
    </div>
  );
}

export default function BudgetForm() {
  const [incomeValues, setIncomeValues] = useState([]);
  const [savingsValues, setSavingsValues] = useState([]);
  const [variableValues, setVariableValues] = useState([]);
  const [fixedValues, setFixedValues] = useState([]);
  const [otherValues, setOtherValues] = useState([]);

  function updateIncomeValues(x, y, z) {
    setIncomeValues([...incomeValues, { category: x, amount: y, id: z }]);
  }

  function updateSavingsValues(x, y, z) {
    setSavingsValues([...savingsValues, { category: x, amount: y, id: z }]);
  }

  function updateVariableValues(x, y, z) {
    setVariableValues([...variableValues, { category: x, amount: y, id: z }]);
  }

  function updateFixedValues(x, y, z) {
    setFixedValues([...fixedValues, { category: x, amount: y, id: z }]);
  }

  function updateOtherValues(x, y, z) {
    setOtherValues([...otherValues, { category: x, amount: y, id: z }]);
  }

  return (
    <div>
      <Category category="Income">
        <BudgetCategory setValues={updateIncomeValues} />
        {incomeValues.map((item) => {
          return (
            <div key={item.id} className="row-container">
              <p>{item.category}</p>
              <p>{item.amount}</p>
              <button
                className="delete"
                onClick={() => {
                  setIncomeValues(
                    incomeValues.filter((obj) => {
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
      </Category>
      <Category category="Savings">
        <BudgetCategory setValues={updateSavingsValues} />
        {savingsValues.map((item) => {
          return (
            <div key={item.id} className="row-container">
              <p>{item.category}</p>
              <p>{item.amount}</p>
              <button
                className="delete"
                onClick={() => {
                  setIncomeValues(
                    savingsValues.filter((obj) => {
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
      </Category>
      <Category category="Fixed Expenses">
        <BudgetCategory setValues={updateFixedValues} />
        {fixedValues.map((item) => {
          return (
            <div key={item.id} className="row-container">
              <p>{item.category}</p>
              <p>{item.amount}</p>
              <button
                className="delete"
                onClick={() => {
                  setIncomeValues(
                    fixedValues.filter((obj) => {
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
      </Category>
      <Category category="Variable Expenses">
        <BudgetCategory setValues={updateVariableValues} />
        {variableValues.map((item) => {
          return (
            <div key={item.id} className="row-container">
              <p>{item.category}</p>
              <p>{item.amount}</p>
              <button
                className="delete"
                onClick={() => {
                  setIncomeValues(
                    variableValues.filter((obj) => {
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
      </Category>
      <Category category="Other">
        <BudgetCategory setValues={updateOtherValues} />
        {otherValues.map((item) => {
          return (
            <div key={item.id} className="row-container">
              <p>{item.category}</p>
              <p>{item.amount}</p>
              <button
                className="delete"
                onClick={() => {
                  setIncomeValues(
                    otherValues.filter((obj) => {
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
      </Category>
      <BudgetSummary income={incomeValues}></BudgetSummary>
    </div>
  );
}
