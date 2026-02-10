import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "Is this a coding bootcamp?",
    a: `No. Bootcamps prioritize curriculum content. We prioritize production experience. You already know how to code; we teach you how to be an engineer on a team.`,
  },
  {
    q: "Do I get paid?",
    a: `No. This is an accelerator program designed to build your portfolio and experience. The "payment" is the high-quality items you can put on your CV to land a full-time role.`,
  },
  {
    q: "What is the time commitment?",
    a: `It is flexible, but results correlate with input. We recommend at least 10–15 hours per week to make meaningful progress on tickets and collaborate effectively with your team.`,
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((item, i) => (
          <div key={i} className={`faq-item ${open === i ? 'active' : ''}`}>
            <button onClick={() => setOpen(open === i ? null : i)}>
              {item.q}
            </button>
            <div className="faq-content">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}