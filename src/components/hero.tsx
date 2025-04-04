import Translate from "./translate";

function Hero() {
  return (
    <section className="mt-40 flex flex-col gap-3 justify-center items-center">
      <h1 className="text-[var(--purple)] text-xl md:text-2xl">
        <Translate text="welcome" />
      </h1>
      <p className="text-5xl md:text-7xl flex flex-col gap-2 justify-center text-center cursor-default">
        <span className="text-gradient text-glowing transition-all">
          <Translate text="introTextOne" />
        </span>
        <span className="text-gradient text-glowing transition-all">
          <Translate text="introTextTwo" />
        </span>
      </p>
    </section>
  );
}

export default Hero;
