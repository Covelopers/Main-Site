import "./Hero.css";
import  { BackgroundWave } from "../Background/BackgroundWave.tsx";

export function Hero() {
  return (
    <>
      <header className="hero">
        <BackgroundWave />
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
              <a href="#contact" className="apply-btn">
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
                <div>
                  <div className="dot red" />
                  <div className="dot yellow" />
                  <div className="dot green" />
                </div>
                <div className="terminal-title">
                  usr@covelopers:~/project
                </div>
                <div style={{ width: "40px" }}></div>
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

      {/* Value Proposition Section */}
      <section className="value-proposition">
        <div className="value-grid">
          <div className="value-content">
            <h2>
              Experience is the <br />
              <span className="gradient-text">New Degree</span>.
            </h2>
            <div className="value-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <span>📝</span>
                </div>
                <div className="feature-text">
                  <h3>Code Reviews</h3>
                  <p>
                    Learn to write clean, maintainable code. Your PRs will be
                    reviewed by peers, forcing you to defend your decisions and
                    improve your quality.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>🔀</span>
                </div>
                <div className="feature-text">
                  <h3>CI/CD Pipelines</h3>
                  <p>
                    Don't just run on localhost. Deploy to production
                    environments using automated pipelines. Handle migrations,
                    environment variables, and rollbacks.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>👥</span>
                </div>
                <div className="feature-text">
                  <h3>Agile Teamwork</h3>
                  <p>
                    Work in sprints using Linear/Jira. Participate in standups.
                    Learn to communicate technical concepts to both engineers and
                    stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* VS Code Mockup */}
          <div className="vscode-mockup">
            <div className="terminal-window">
              <div className="terminal-header">
                <div>
                  <div className="dot red" />
                  <div className="dot yellow" />
                  <div className="dot green" />
                </div>
                <div className="terminal-title">App.tsx</div>
                <div style={{ width: "40px" }}></div>
              </div>
              <div className="terminal-body">
                <div className="syntax-comment">
                  // Mastering the modern workflow
                </div>
                <div>
                  <span className="syntax-keyword">import</span>{" "}
                  {"{ "}
                  <span className="syntax-function">Experience</span>
                  {" }"} <span className="syntax-keyword">from</span>{" "}
                  <span className="syntax-string">'@covelopers/core'</span>;
                </div>
                <br />
                <div>
                  <span className="syntax-keyword">export const</span>{" "}
                  <span className="syntax-function">CareerGrowth</span> = () =&gt; {"{"}
                </div>
                <div className="indent">
                  <span className="syntax-keyword">const</span> [skills, setSkills] ={" "}
                  <span className="syntax-function">useState</span>([
                </div>
                <div className="indent" style={{ paddingLeft: "48px" }}>
                  <span className="syntax-string">'Next.js'</span>,{" "}
                  <span className="syntax-string">'TypeScript'</span>,{" "}
                  <span className="syntax-string">'Supabase'</span>
                </div>
                <div className="indent">]);</div>
                <br />
                <div className="indent">
                  <span className="syntax-keyword">return</span> (
                </div>
                <div className="indent" style={{ paddingLeft: "48px" }}>
                  <span className="syntax-string">&lt;Experience</span>
                  <br />
                  &nbsp;&nbsp;<span className="syntax-string">type="production"</span>
                  <br />
                  &nbsp;&nbsp;<span className="syntax-string">team={"{"}true{"}"}</span>
                  <br />
                  &nbsp;&nbsp;<span className="syntax-string">impact="high"</span>{" "}
                  <span className="syntax-string">/&gt;</span>
                </div>
                <div className="indent">);</div>
                <div>{"}"};</div>
              </div>
              <div className="terminal-footer">
                <div className="footer-left">
                  <span>master*</span>
                  <span>⎇</span>
                </div>
                <div className="footer-right">
                  <div>⚠ 0</div>
                  <div>✕ 0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
