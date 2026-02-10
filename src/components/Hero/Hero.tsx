import "./Hero.css";
import  { BackgroundWave } from "../Background/BackgroundWave.tsx";

export function Hero() {
  return (
    <div className="hero">
      <BackgroundWave />

      <div className="hero-content">
        <span className="pill">Engineering-first community</span>

        <h1>
          Build real software.
          <br />
          <span className="gradient-text">Together.</span>
        </h1>

        <p>
          Covelopers is a collaborative engineering space where developers design,
          review, and ship production-grade systems.
        </p>

        <div className="hero-actions">
          <button className="primary">Join the community</button>
          <button className="secondary">Learn more</button>
        </div>
      </div>
    </div>
  );
}
