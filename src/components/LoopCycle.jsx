import loopStages from "../data/loopStages.js";

function LoopCycle() {
  return (
    <ol
      className="loop-cycle"
      role="list"
      aria-label="The four steps of a Loop Engineering iteration"
    >
      {loopStages.map((stage) => (
        <li className="cycle-step" key={stage.name}>
          <div className="cycle-step-heading">
            <span className="cycle-step-number" aria-hidden="true">
              {stage.number}
            </span>
            <h3>{stage.name}</h3>
          </div>
          <p>{stage.description}</p>
          <span className="cycle-step-signal">{stage.signal}</span>
        </li>
      ))}
    </ol>
  );
}

export default LoopCycle;
