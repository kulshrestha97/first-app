import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
const Expenses = (props) => (
  <div className={"expenses"}>
    {props.data.map((entry) => (
      <ExpenseItem
        id={entry.id}
        title={entry.title}
        amount={entry.amount}
        date={entry.date}
      />
    ))}
  </div>
);

export default Expenses;
