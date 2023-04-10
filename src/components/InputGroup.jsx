import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function InputGroup(props) {
  let intialId = uuidv4();
  const [item, setItem] = useState({ category: "", amount: 0, id: intialId });

  function setAmount(event) {
    setItem({
      ...item,
      amount: parseFloat(event.target.value),
    });
  }

  function setCategory(event) {
    setItem({
      ...item,
      category: event.target.value,
    });
  }

  function resetItem() {
    setItem({ category: "", amount: 0, id: uuidv4() });
  }

  return (
    <form
      className="input-group"
      onSubmit={(e) => {
        e.preventDefault();
        if (item.category === "") {
          return;
        }
        props.addItem(item, props.category);
        resetItem();
      }}
    >
      <input
        type="text"
        value={item.category}
        onChange={(e) => setCategory(e)}
        placeholder="Category"
      />
      <input
        type="number"
        value={item.amount === 0 ? "" : item.amount}
        onChange={(e) => setAmount(e)}
        placeholder="Amount"
      />
      <button className="primary-btn">Add Row</button>
    </form>
  );
}
