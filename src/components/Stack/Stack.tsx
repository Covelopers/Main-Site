import "./Stack.css";
import { SiReact, SiSupabase, SiTailwindcss, SiGithub } from 'react-icons/si';

export function Stack() {
  return (
    <section id="stack">
      <div className="stack-grid">
        <div className="stack-content">
          <h2>Technical Stack</h2>
          <p>
            We use a modern, opinionated stack. You will master these tools by
            using them daily.
          </p>
          <div className="stack-list">
            <div className="stack-item">
              <div className="stack-icon">
                <SiReact size={24} color="#61DAFB" />
              </div>
              <div className="stack-text">
                <strong>React & Next.js</strong>
                <span>Server Side Rendering, App Router, TypeScript.</span>
              </div>
            </div>
            <div className="stack-item">
              <div className="stack-icon">
                <SiSupabase size={24} color="#3ECF8E" />
              </div>
              <div className="stack-text">
                <strong>Supabase (PostgreSQL)</strong>
                <span>Database, Auth, and Edge Functions.</span>
              </div>
            </div>
            <div className="stack-item">
              <div className="stack-icon">
                <SiTailwindcss size={24} color="#06B6D4" />
              </div>
              <div className="stack-text">
                <strong>Tailwind CSS</strong>
                <span>Utility-first styling system.</span>
              </div>
            </div>
            <div className="stack-item">
              <div className="stack-icon">
                <SiGithub size={24} />
              </div>
              <div className="stack-text">
                <strong>GitHub Actions</strong>
                <span>CI/CD pipelines for automated testing/deployment.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Window moved from Hero */}
        <div className="stack-terminal">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
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
    </section>
  );
}