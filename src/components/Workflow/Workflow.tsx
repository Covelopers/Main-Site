import "./Workflow.css";

export function Workflow() {
  return (
    <section id="workflow">
      <div className="workflow-header">
        <h2>The Git Flow</h2>
        <p>
          We don't do "assignments". We simulate a real engineering environment.
          You will adhere to industry-standard CI/CD pipelines.
        </p>
      </div>

      <div className="workflow-grid">
        <div className="workflow-step">
          <div className="step-number">01</div>
          <h3>Ticket</h3>
          <p>
            Pick a ticket from the backlog (Linear/Jira). Understand the
            requirements. Estimate complexity.
          </p>
        </div>

        <div className="workflow-step">
          <div className="step-number">02</div>
          <h3>Feature Branch</h3>
          <p>
            Create a feature branch. Write clean, modular code. Commit often with
            meaningful messages.
          </p>
        </div>

        <div className="workflow-step">
          <div className="step-number">03</div>
          <h3>Pull Request</h3>
          <p>
            Open a PR. CI checks run automatically. You review each other's code.
            You fix requested changes.
          </p>
        </div>

        <div className="workflow-step">
          <div className="step-number">04</div>
          <h3>Merge & Deploy</h3>
          <p>
            Squash and merge to main. CD pipeline deploys to production
            automatically. Feature is live.
          </p>
        </div>
      </div>
    </section>
  );
}
