import { Link } from "react-router-dom";
import CopyrightBanner from "../components/copyright-banner";

function ExpenseTracker() {
  return (
    <div>
      <div className="text-white p-3 cursor-pointer fixed left-0 top-1">
        <Link className="hover:underline" to={"/"}>
          Go back
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center mt-15 p-3 gap-5">
        <h1 className="text-4xl text-white font-bold">Expense Tracker</h1>
        <section className="text-center text-[var(--color-shadows)]">
          <p>
            This web app allows you to track your expenses and manage your
            budget.
          </p>
          <p>It also includes a login system to secure your data.</p>
        </section>
        <p className="bg-[var(--purple)] p-3 rounded text-white">
          Next.js + TypeScript + TailwindCSS
        </p>
      </div>
      <div className="mt-10">
        <p className="text-2xl text-white text-center mt-3 mb-5">
          Different colorschemes
        </p>
        <ShowImages />
      </div>
      <p className="text-white text-center p-10">
        ⚠️ Unfortunately, I lost the source code and I can't show you the
        dashboard preview, sorry ⚠️
      </p>
      <CopyrightBanner />
    </div>
  );
}

function ShowImages() {
  return (
    <div className="flex flex-col gap-10 md:p-10">
      <div className="flex gap-10 justify-start">
        <img
          className="h-54 lg:h-70 rounded"
          src="./blue.png"
          alt="Blue theme preview"
        />
        <img
          className="h-54 lg:h-70 rounded"
          src="./yellow.png"
          alt="Yellow theme preview"
        />
      </div>
      <div className="flex gap-10 justify-end">
        <img
          className="h-54 lg:h-70 rounded"
          src="./green.png"
          alt="Green theme preview"
        />
        <img
          className="h-54 lg:h-70 rounded"
          src="./purple.png"
          alt="Purple theme preview"
        />
      </div>
    </div>
  );
}

export default ExpenseTracker;
