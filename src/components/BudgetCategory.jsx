import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function BudgetCategory({ setValues }) {
  const [textValue, setTextValue] = useState("");
  const [numValue, setNumValue] = useState(0);

  const addRow = () => {
    if (textValue === "") {
      return;
    }

    let setId = uuidv4();
    setValues(textValue, numValue, setId);
    setTextValue("");
    setNumValue(0);
  };

  return (
    <form
      className="input-group"
      onSubmit={(e) => {
        e.preventDefault();
        addRow();
      }}
    >
      <input
        type="text"
        placeholder="Category"
        onChange={(e) => setTextValue(e.target.value)}
        value={textValue}
      />
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setNumValue(e.target.value)}
        value={numValue === 0 && textValue === "" ? "" : numValue}
      />
      <button className="primary-btn">Add row</button>
    </form>
  );
}
