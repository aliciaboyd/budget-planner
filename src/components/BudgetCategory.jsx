import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Income({ setValues }) {
  const [textValue, setTextValue] = useState("");
  const [numValue, setNumValue] = useState(undefined);

  const addRow = () => {
    if (textValue === "" || numValue === null) {
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
        value={numValue}
      />
      <button className="secondary-btn">Add row</button>
    </form>
  );
}
