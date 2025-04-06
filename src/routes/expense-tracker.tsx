import { Link } from "react-router-dom";

function ExpenseTracker() {
  return (
    <div className="text-white">
      <Link to={"/"}>Go back</Link>
      <h1>Expense Tracker</h1>
    </div>
  );
}

export default ExpenseTracker;
