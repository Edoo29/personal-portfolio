import { useState } from "react";
import Arrow from "./arrow";
import LoadAnimation from "./load-animation";
import Translate from "./translate";

function ContactMe() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center gap-6 p-3 h-screen"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <LoadAnimation animateWhenVisible>
          <ContactMeTitle />
        </LoadAnimation>
        <LoadAnimation animateWhenVisible delay={0.2}>
          <ContactMeDescription />
        </LoadAnimation>
      </div>
      <LoadAnimation animateWhenVisible delay={0.4}>
        <ShowEmailButton />
      </LoadAnimation>
      <LoadAnimation animateWhenVisible delay={0.6}>
        <GoBack />
      </LoadAnimation>
    </div>
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
        TODO: Enable the button when you are ready to work,
        removing the disabled attribute and the not avalaible text,
        adding the real email, the cursor-pointer and the white text
      */
      disabled
      className="p-5 border-glass text-[var(--color-shadows)] cursor-not-allowed rounded-xl shadow-md glowing-effect"
      onClick={handleClick}
    >
      <p>
        ⚠️ <Translate text="notAvailable " /> ⚠️
      </p>
      {showEmail ? (
        <a href="example@gmail.com">example@gmail.com</a>
      ) : (
        <p className="line-through">
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

export default ContactMe;
