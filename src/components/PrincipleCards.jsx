const principles = [
  {
    number: "01",
    title: "Make the goal measurable",
    description:
      "Agree on an observable outcome before changing the system. A clear finish line makes progress easier to judge.",
  },
  {
    number: "02",
    title: "Keep each step small",
    description:
      "Prefer a focused, reversible change. Smaller steps are faster to verify and safer to adjust.",
  },
  {
    number: "03",
    title: "Let evidence lead",
    description:
      "Run the checks and inspect what happened. Use the result—not optimism—to choose what comes next.",
  },
];

function PrincipleCards() {
  return (
    <div className="principles-grid">
      {principles.map((principle) => (
        <article className="principle-card" key={principle.number}>
          <span className="principle-number" aria-hidden="true">
            {principle.number}
          </span>
          <h3>{principle.title}</h3>
          <p>{principle.description}</p>
        </article>
      ))}
    </div>
  );
}

export default PrincipleCards;
