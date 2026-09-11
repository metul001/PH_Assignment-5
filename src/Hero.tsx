import banner from './assets/banner-stack.png'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Build Your Ideal
            <span className="gradient-text">Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="primary-button">Explore Technologies</a>
            <a href="#about" className="outline-button">Learn More</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={banner} alt="Development stack illustration" />
        </div>
      </div>
    </section>
  )
}
