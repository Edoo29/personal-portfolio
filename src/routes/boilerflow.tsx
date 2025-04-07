import CopyrightBanner from "../components/copyright-banner";
import { LanguageSwitcher } from "../components/navbar";
import Translate from "../components/translate";
import { ImagePreviewProps } from "../types";
import {
  BackLink,
  ImagePreview,
  ScrollToTop,
  TechBadge,
} from "./expense-tracker";

const boilerflowImages: ImagePreviewProps[] = [
  {
    src: "./boilerflow-2.png",
    alt: "Boilerflow list command preview",
  },
  {
    src: "./boilerflow-3.png",
    alt: "Boilerflow status command preview",
  },
];

export default function Boilerflow() {
  return (
    <>
      <ScrollToTop />
      <BackLink />
      <main className="flex flex-col items-center justify-center mt-5 p-3 gap-5">
        <h1 className="text-4xl text-white font-bold">Boilerflow</h1>

        <section className="text-center text-[var(--color-shadows)] space-y-2">
          <p>
            <Translate text="boilerflowDescription" />
          </p>
          <p>
            <Translate text="boilerflowTextOne" />
          </p>
        </section>
        <TechBadge text="Python" />
        <section className="mt-5">
          <ShowBoilerflowImages />
        </section>
      </main>
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

function ShowBoilerflowImages() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:p-10">
      {boilerflowImages.map((image, idx) => (
        <ImagePreview key={idx} {...image} />
      ))}
    </div>
  );
}
