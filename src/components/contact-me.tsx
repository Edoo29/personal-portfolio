import { useState } from "react";
import Arrow from "./arrow";
import LoadAnimation from "./load-animation";
import Translate from "./translate";
import CopyrightBanner from "./copyright-banner";

export default function ContactMe() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 p-3 h-screen">
        <div className="flex flex-col gap-3 justify-center items-center">
          <LoadAnimation delay={0.2}>
            <ContactMeTitle />
          </LoadAnimation>

          <LoadAnimation delay={0.4}>
            <ContactMeDescription />
          </LoadAnimation>
        </div>
        <LoadAnimation delay={0.6}>
          <ShowEmailButton />
        </LoadAnimation>

        <LoadAnimation delay={0.8}>
          <GoBack />
        </LoadAnimation>
      </div>

      <div id="contact-me">
        <CopyrightBanner />
      </div>
    </>
  );
}

function ContactMeTitle() {
  return (
    <h2 className="text-4xl text-white">
      <Translate text="contactMeTitle" />
    </h2>
  );
}

function ContactMeDescription() {
  return (
    <p className="text-[var(--color-shadows)] text-lg md:text-xl">
      <Translate text="contactMeDescription" />
    </p>
  );
}

function ShowEmailButton() {
  const [clicks, setClicks] = useState<number>(3);
  const [showEmail, setShowEmail] = useState<boolean>(false);

  const handleClick = () => {
    setClicks((prev) => prev - 1);
    if (clicks <= 1) {
      setShowEmail(true);
    }
  };

  return (
    <button
      /*
        TODO: Add the email address
      */
      className="p-5 border-glass text-[var(--color-shadows)] rounded-xl shadow-md glowing-effect cursor-pointer"
      onClick={handleClick}
    >
      {showEmail ? (
        // <a href="example@gmail.com">example@gmail.com</a>
        <span>
          ⚠️ <Translate text="notAvailable" />
        </span>
      ) : (
        <p>
          <Translate text="contactMeClickOne" /> {clicks}
          <Translate text="contactMeClickTwo" />
        </p>
      )}
    </button>
  );
}

function GoBack() {
  return (
    <Arrow direction="up" reference="#home" customClass="mt-25">
      <Translate text="goBack" />
    </Arrow>
  );
}
