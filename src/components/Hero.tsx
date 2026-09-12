interface HeroProps {
  onExplore: () => void;
}

const Hero = ({ onExplore }: HeroProps) => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="">
  
</div>

        <h1>
          Build Your Ideal
          <br />
          <span className="gradient-text">Development Stack</span>
          <br />
        </h1>

        <p>
          Explore frontend,backend,database and tooling options,compare them side by side and put together the stack that fits yours next project 
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={onExplore}>
            Explore Technologies
            <span>→</span>
          </button>

          <button className="secondary-btn">
            Learn More
            <span>→</span>
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src={`${import.meta.env.BASE_URL}banner-stack.png`}
          alt="Technology Stack"
          className="hero-banner"
        />
      </div>
    </section>
  );
};

export default Hero;