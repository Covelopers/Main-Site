import "./Stack.css";

export function Stack() {
  return (
    <section id="stack">
      <div className="stack-grid">
        <div>
          <h2>Technical Stack</h2>
          <p>
            We use a modern, opinionated stack. You will master these tools by
            using them daily.
          </p>

          <ul className="stack-list">
            <li>
              <strong>React & Next.js</strong>
              <span>Server Side Rendering, App Router, TypeScript.</span>
            </li>
            <li>
              <strong>Supabase (PostgreSQL)</strong>
              <span>Database, Auth, and Edge Functions.</span>
            </li>
            <li>
              <strong>Tailwind CSS</strong>
              <span>Utility-first styling system.</span>
            </li>
            <li>
              <strong>GitHub Actions</strong>
              <span>CI/CD pipelines for automated testing/deployment.</span>
            </li>
          </ul>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">package.json</div>
          <pre>
{`{
  "name": "covelopers-stack",
  "version": "1.0.0",
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "typescript": "^5.0.0",
    "@supabase/js": "^2.0.0",
    "tailwindcss": "^3.3.0",
    "lucide-react": "^0.290.0"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "vitest": "^1.0.0"
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}
