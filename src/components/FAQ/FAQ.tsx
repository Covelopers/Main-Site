import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "Is this beginner friendly?",
    a: "Yes, but we expect commitment and curiosity.",
  },
  {
    q: "Is this paid?",
    a: "No. Covelopers is community-driven.",
  },
  {
    q: "Do you ship real projects?",
    a: "Yes. That’s the whole point.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq">
      <h2>FAQ</h2>

      {faqs.map((item, i) => (
        <div key={i} className="faq-item">
          <button onClick={() => setOpen(open === i ? null : i)}>
            {item.q}
          </button>
          {open === i && <p>{item.a}</p>}
        </div>
      ))}
    </div>
  );
}
