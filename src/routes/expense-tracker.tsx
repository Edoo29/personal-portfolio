import { Link } from "react-router-dom";
import CopyrightBanner from "../components/copyright-banner";
import { MoveLeft } from "lucide-react";
import { ImagePreviewProps } from "../types";
import Translate from "../components/translate";
import { LanguageSwitcher } from "../components/navbar";
import { useEffect } from "react";

const images: ImagePreviewProps[] = [
  { src: "./blue.png", alt: "Blue theme preview of Expense Tracker app" },
  { src: "./yellow.png", alt: "Yellow theme preview of Expense Tracker app" },
  { src: "./green.png", alt: "Green theme preview of Expense Tracker app" },
  { src: "./purple.png", alt: "Purple theme preview of Expense Tracker app" },
];

export default function ExpenseTracker() {
  return (
    <>
      <ScrollToTop /> {/* It will scroll to top on the page load */}
      <BackLink />
      <main className="flex flex-col items-center justify-center mt-5 p-3 gap-5">
        <h1 className="text-4xl text-white font-bold">Expense Tracker</h1>

        <section className="text-center text-[var(--color-shadows)] space-y-2">
          <p>
            <Translate text="expenseTrackerTextOne" />
          </p>
          <p>
            <Translate text="expenseTrackerTextTwo" />
          </p>
        </section>

        <TechBadge text="Next.js + TypeScript + TailwindCSS" />
      </main>
      <section className="mt-5">
        <ShowImages />
      </section>
      <footer className="text-white text-center p-10">
        ⚠️ <Translate text="expenseTrackerTextThree" /> ⚠️
      </footer>
      <div className="hidden md:block">
        <LanguageSwitcher position="top" />
      </div>
      <div className="block md:hidden">
        <LanguageSwitcher position="bottom" />
      </div>
      <CopyrightBanner customClass="md:bottom-0" />
    </>
  );
}

function BackLink() {
  return (
    <div className="p-3">
      <Link
        to="/"
        className="flex gap-2 absolute text-[var(--color-shadows)] hover:text-white transition-all"
      >
        <MoveLeft />
        <Translate text="back" />
      </Link>
    </div>
  );
}

function TechBadge({ text }: { text: string }) {
  return (
    <p className="bg-[var(--purple)] px-5 py-2 rounded text-white text-sm md:text-base">
      {text}
    </p>
  );
}

function ShowImages() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:p-10">
      {images.map((image, idx) => (
        <ImagePreview key={idx} {...image} />
      ))}
    </div>
  );
}

function ImagePreview({ src, alt }: ImagePreviewProps) {
  return (
    <img
      className="h-40 lg:h-54 rounded shadow-lg"
      src={src}
      alt={alt}
      loading="lazy"
    />
  );
}

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
