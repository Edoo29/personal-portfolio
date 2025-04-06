import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/homepage";
import ExpenseTracker from "./routes/expense-tracker";
import Boilerflow from "./routes/boilerflow";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/boilerflow" element={<Boilerflow />} />
      </Routes>
    </>
  );
}

export default App;
