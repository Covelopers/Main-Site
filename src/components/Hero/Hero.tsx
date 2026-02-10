import "./Hero.css";
// import  { BackgroundWave } from "../Background/BackgroundWave.tsx";
      {/* <BackgroundWave /> */}
export function Hero() {
  return (

          <header className="hero">
      <div className="hero-overlay" />

      <div className="hero-grid">
        {/* LEFT: COPY */}
        <div className="hero-copy">
          <div className="version-pill">
            <span className="pulse-dot" />
            <span>v2.0.0 :: Production Ready</span>
          </div>

          <h1>
            Build Software.
            <br />
            <span className="gradient-text">Not Tutorials.</span>
          </h1>

          <p>
            Stop watching videos. Join a professional engineering team. Manage
            the backlog, open Pull Requests, survive Code Reviews, and ship to
            production.
          </p>

          <div className="hero-actions">
            <a href="#" className="apply-btn">
              Start Building
            </a>
            <a href="#workflow" className="secondary-btn">
              View the Workflow
            </a>
          </div>
        </div>

        {/* RIGHT: TERMINAL */}
        <div className="hero-terminal">
          <div className="terminal-glow" />

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="dot red" />
              <div className="dot yellow" />
              <div className="dot green" />
              <div className="terminal-title">
                usr@covelopers:~/project
              </div>
            </div>

            <div className="terminal-body">
              <div>
                ➜ ~/project git checkout -b feature/user-auth
              </div>
              <div className="muted">
                Switched to a new branch 'feature/user-auth'
              </div>

              <br />

              <div>
                ➜ ~/project npm run dev
              </div>
              <div className="muted">
                available on http://localhost:3000 <br />
                ready in 124ms
              </div>

              <div className="code-block">
                <div className="comment">// src/components/Auth.tsx</div>
                <div>
                  export const Auth = () =&gt; {"{"}
                </div>
                <div className="indent">
                  const [user, setUser] = useState(null);
                </div>
                <div className="indent comment">
                  // TODO: Implement Supabase login
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}
