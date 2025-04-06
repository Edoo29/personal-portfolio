import { Link } from "react-router-dom";
import CopyrightBanner from "../components/copyright-banner";
import { MoveLeft } from "lucide-react";
import { ImagePreviewProps } from "../types";

const images: ImagePreviewProps[] = [
  { src: "./blue.png", alt: "Blue theme preview" },
  { src: "./yellow.png", alt: "Yellow theme preview" },
  { src: "./green.png", alt: "Green theme preview" },
  { src: "./purple.png", alt: "Purple theme preview" },
];

export default function ExpenseTracker() {
  return (
    <>
      <div className="p-3">
        <Link
          className="flex gap-2 absolute text-[var(--color-shadows)] hover:text-white"
          to={"/"}
        >
          <MoveLeft />
          Back
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center mt-5 p-3 gap-5">
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
      <div className="mt-5">
        <ShowImages />
      </div>
      <p className="text-white text-center p-10">
        ⚠️ Unfortunately, I lost the source code and I can't show you the
        dashboard preview, sorry ⚠️
      </p>
      <CopyrightBanner customClass="md:bottom-0" />
    </>
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
    <img className="h-40 lg:h-54 rounded" src={src} alt={alt} loading="lazy" />
  );
}
