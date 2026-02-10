import "./Stack.css";

export function Stack() {
  return (
    <div className="stack">
      <h2>Technical stack</h2>

      <div className="stack-grid">
        <ul>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>CI/CD pipelines</li>
        </ul>

        <div className="terminal">
          <pre>
{`$ git clone covelopers/project
$ npm install
$ npm run build
✔ shipped`}
          </pre>
        </div>
      </div>
    </div>
  );
}
