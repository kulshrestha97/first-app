import "./ExpenseItem.css";
import { useState } from "react";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated!");
  };
  return (
    <div className="expense-item">
      <div>{props.date.toLocaleString("en-US")}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Add Button</button>
    </div>
  );
};

export default ExpenseItem;
