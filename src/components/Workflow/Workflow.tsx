import "./Workflow.css";

const steps = [
  {
    title: "Ideation",
    text: "Propose real-world software problems worth solving.",
  },
  {
    title: "Design",
    text: "Collaborate on architecture and system design.",
  },
  {
    title: "Build",
    text: "Implement features with code reviews and standards.",
  },
  {
    title: "Ship",
    text: "Deploy, document, and reflect like a real team.",
  },
];

export function Workflow() {
  return (
    <div className="workflow">
      <h2>How we work</h2>

      <div className="workflow-grid">
        {steps.map((step) => (
          <div key={step.title} className="workflow-card">
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
