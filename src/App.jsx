import LoopCycle from "./components/LoopCycle.jsx";
import PrincipleCards from "./components/PrincipleCards.jsx";

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Loop Engineering home">
          <span className="brand-mark" aria-hidden="true">
            L
          </span>
          <span>
            loop<span className="brand-dot">.</span>
            <small>ENGINEERING</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#cycle">The cycle</a>
          <a href="#principles">Principles</a>
        </nav>
        <a className="header-link" href="#cycle">
          Explore the method <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              A PRACTICAL SYSTEM FOR MAKING PROGRESS
            </p>
            <h1 id="hero-title" aria-label="Make progress, measurable.">
              Make progress,
              <br />
              <span>measurable.</span>
            </h1>
            <p className="hero-description">
              Loop Engineering turns uncertain work into clear outcomes, small
              changes, and evidence you can learn from.
            </p>
            <a className="primary-link" href="#cycle">
              See how the loop works <span aria-hidden="true">↓</span>
            </a>
          </div>

          <aside className="hero-panel" aria-label="Loop Engineering at a glance">
            <div className="panel-topline">
              <span>THE ENGINEERING LOOP</span>
              <span className="panel-live">
                <span aria-hidden="true" /> ALWAYS ITERATING
              </span>
            </div>
            <div className="panel-main">
              <div className="panel-count">
                <strong>04</strong>
                <span>moves<br />one clear cycle</span>
              </div>
              <div className="orbit" aria-hidden="true">
                <span className="orbit-node node-goal">G</span>
                <span className="orbit-node node-action">A</span>
                <span className="orbit-node node-observe">O</span>
                <span className="orbit-node node-adjust">↻</span>
                <span className="orbit-center">L</span>
              </div>
            </div>
            <div className="panel-foot">
              <span>Goal</span>
              <i aria-hidden="true" />
              <span>Action</span>
              <i aria-hidden="true" />
              <span>Observe</span>
              <i aria-hidden="true" />
              <span>Adjust</span>
            </div>
          </aside>
        </section>

        <section className="cycle-section" id="cycle" aria-labelledby="cycle-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / THE METHOD</p>
              <h2 id="cycle-title">One loop. Four deliberate moves.</h2>
            </div>
            <p>
              Keep each iteration small enough to verify—and useful enough to
              move the work forward.
            </p>
          </div>
          <LoopCycle />
        </section>

        <section className="principles-section" id="principles" aria-labelledby="principles-title">
          <div className="section-heading principles-heading">
            <div>
              <p className="eyebrow">02 / THE PRACTICE</p>
              <h2 id="principles-title">Less guesswork. Better decisions.</h2>
            </div>
            <p>
              Build confidence through small steps, visible outcomes, and
              honest feedback.
            </p>
          </div>
          <PrincipleCards />
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#" aria-label="Loop Engineering home">
          <span className="brand-mark" aria-hidden="true">L</span>
          <span>loop<span className="brand-dot">.</span><small>ENGINEERING</small></span>
        </a>
        <span>Small steps. Clear signals. Continuous progress.</span>
      </footer>
    </>
  );
}

export default App;
