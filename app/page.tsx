const proofPoints = [
  {
    label: "Field-proof UX",
    copy: "Large actions and zero wasted taps for crews working under pressure.",
  },
  {
    label: "Proposal-ready",
    copy: "The page sells a believable product direction instead of looking like a generic mockup.",
  },
  {
    label: "Scalable shell",
    copy: "Built in Next.js so this presentation can evolve into real frontend product surfaces.",
  },
];

const featureCards = [
  {
    id: "01",
    title: "Crew Check-In",
    copy:
      "Attendance feels immediate: site, phase, shift target, and status all sit above the main action.",
    points: ["Geolocation context", "Shift summary", "Fast check-in and check-out"],
  },
  {
    id: "02",
    title: "Operational Control",
    copy:
      "Managers organize teams by project and phase with a structure that mirrors real field operations.",
    points: ["Assignments by phase", "Clear daily tasks", "Manager visibility"],
  },
  {
    id: "03",
    title: "Evidence and Reporting",
    copy:
      "Photos, videos, chat, and reports remain attached to the right project thread for clean accountability.",
    points: ["Daily reports", "Internal communication", "Project file traceability"],
  },
];

const workflow = [
  {
    time: "06:45",
    title: "Arrival logged",
    copy: "The worker lands on a single screen with site identity, shift status, and the next action.",
  },
  {
    time: "09:20",
    title: "Tasks clarified",
    copy: "Current work package, notes, and phase details stay visible instead of buried inside menus.",
  },
  {
    time: "14:10",
    title: "Progress captured",
    copy: "Photos and video evidence upload directly into the active project record with cleaner organization.",
  },
  {
    time: "17:30",
    title: "Office sees the day",
    copy: "Managers close the loop with attendance, field notes, blockers, and a usable daily summary.",
  },
];

const roleFlows = [
  {
    role: "Admin",
    label: "Platform control",
    intro: "Vista mobile para configurar proyectos, permisos y visibilidad sin perder contexto operativo.",
    status: "HQ / ACTIVE",
    screens: [
      { name: "Projects", detail: "Create site, phase, crews" },
      { name: "Permissions", detail: "Assign roles and access" },
      { name: "Reports", detail: "Approve what clients can see" },
    ],
  },
  {
    role: "Manager",
    label: "Daily operations",
    intro: "Pantallas para asignar trabajo, revisar avances y cerrar el dia desde una interfaz rapida.",
    status: "SITE OPS / LIVE",
    screens: [
      { name: "Dashboard", detail: "Crew attendance and blockers" },
      { name: "Assignments", detail: "Phase tasks and priorities" },
      { name: "Daily report", detail: "Progress, delays, incidents" },
    ],
  },
  {
    role: "Worker",
    label: "Field actions",
    intro: "La experiencia mas simple: entrar, ver tarea, subir evidencia y salir sin friccion.",
    status: "FIELD / ON SHIFT",
    screens: [
      { name: "Check-in", detail: "Geo verified start and end" },
      { name: "My tasks", detail: "Current phase and notes" },
      { name: "Uploads", detail: "Photos and videos by project" },
    ],
  },
  {
    role: "Client",
    label: "Read-only progress",
    intro: "Acceso mobile limpio para revisar hitos aprobados, reportes y evidencia del proyecto.",
    status: "CLIENT VIEW / SAFE",
    screens: [
      { name: "Overview", detail: "Milestones and project pulse" },
      { name: "Reports", detail: "Approved daily summaries" },
      { name: "Evidence", detail: "Curated photos and files" },
    ],
  },
];

const roles = [
  {
    label: "Admin",
    copy: "Owns project creation, permissions, report visibility, and platform-wide structure.",
  },
  {
    label: "Manager",
    copy: "Coordinates crews, publishes daily direction, and tracks progress from the office.",
  },
  {
    label: "Worker",
    copy: "Gets an action-led interface focused on attendance, tasks, media, and direct communication.",
  },
  {
    label: "Client",
    copy: "Sees approved milestones, selected progress evidence, and controlled read-only updates.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="site-noise" aria-hidden="true" />

      <header className="masthead wrapper">
        <a className="brand reveal" href="#home" aria-label="CrewCore home">
          <span className="brand-mark">CC</span>
          <span>
            CrewCore
            <small>Construction operations MVP</small>
          </span>
        </a>

        <nav className="nav reveal" aria-label="Primary navigation">
          <a href="#modules">Modules</a>
          <a href="#mobile-flows">Flows</a>
          <a href="/pantallas">Pantallas</a>
          <a href="#workflow">Workflow</a>
          <a href="#roles">Roles</a>
        </nav>
      </header>

      <section className="hero wrapper" id="home">
        <div className="hero-copy">
          <span className="eyebrow reveal">Industrial editorial direction / Next.js frontend</span>
          <p className="hero-index reveal">MVP / 01</p>
          <h1 className="reveal">
            Built for dust,
            <br />
            deadlines,
            <br />
            and daily proof.
          </h1>
          <p className="hero-lead reveal">
            CrewCore is a sharper frontend concept for a construction operations MVP. The visual
            language mixes blueprint precision, field utility, and proposal-grade polish so the
            product feels credible from the first screen.
          </p>

          <div className="hero-actions reveal">
            <a className="button button-primary" href="#modules">
              Explore modules
            </a>
            <a className="button button-secondary" href="#workflow">
              See the workflow
            </a>
          </div>

          <div className="proof-ribbon reveal">
            {proofPoints.map((item) => (
              <article className="proof-card" key={item.label}>
                <strong>{item.label}</strong>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-stage reveal">
          <div className="stage-panel">
            <div className="stage-grid" aria-hidden="true" />

            <div className="stage-topline">
              <span className="mono-label">SITE PULSE / LIVE</span>
              <span className="status-tag">ONLINE</span>
            </div>

            <div className="stage-title">
              <p className="section-kicker">Field command surface</p>
              <h2>One screen for attendance, task clarity, and progress proof.</h2>
            </div>

            <div className="stage-layout">
              <section className="console-card console-card-primary">
                <div className="pill-row">
                  <span className="pill">Geo verified</span>
                  <span className="pill">Concrete phase</span>
                </div>

                <h3>Clock-in built for speed</h3>
                <p>
                  The worker sees only what matters: active site, shift target, and two actions
                  that cannot be misread on a busy job site.
                </p>

                <div className="metric-grid">
                  <div className="metric-tile">
                    <strong>07:00</strong>
                    <span>Shift start</span>
                  </div>
                  <div className="metric-tile">
                    <strong>08h 30m</strong>
                    <span>Expected workday</span>
                  </div>
                </div>

                <div className="action-row">
                  <button type="button" className="action-button action-button-primary">
                    Check In
                  </button>
                  <button type="button" className="action-button action-button-secondary">
                    Check Out
                  </button>
                </div>
              </section>

              <section className="console-card">
                <p className="mono-label">TODAY / CREW A</p>
                <ul className="task-list">
                  <li>
                    <strong>Pour columns in Zone C</strong>
                    <span>Assigned with materials and safety notes.</span>
                  </li>
                  <li>
                    <strong>Upload progress images</strong>
                    <span>Evidence is tagged automatically to the project folder.</span>
                  </li>
                  <li>
                    <strong>Close report by 17:30</strong>
                    <span>Managers get same-day visibility without spreadsheet chasing.</span>
                  </li>
                </ul>
              </section>

              <section className="console-card console-card-compact">
                <p className="mono-label">REPORT COMPLETION</p>
                <div className="progress-track">
                  <span />
                </div>
                <small>76% of the daily operational flow completed</small>
              </section>

              <aside className="floating-note">
                <span className="mono-label">MEMORABLE DETAIL</span>
                <strong>Blueprint energy, not generic SaaS.</strong>
                <p>
                  The interface borrows from site plans, signage, and field paperwork instead of
                  default startup patterns.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="band wrapper" id="modules">
        <div className="section-heading">
          <span className="section-kicker">Core modules</span>
          <h2>A proposal page that already feels like the product.</h2>
          <p>
            This MVP direction focuses on the highest-value actions first: attendance, crew
            coordination, progress evidence, and daily reporting. The layout is intentionally
            bolder so the project feels memorable, not templated.
          </p>
        </div>

        <div className="feature-grid">
          {featureCards.map((card) => (
            <article className="feature-card" key={card.id}>
              <span className="feature-id">{card.id}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-band" id="workflow">
        <div className="wrapper workflow-grid">
          <div className="workflow-copy">
            <span className="section-kicker">Daily flow</span>
            <h2>Every screen exists to reduce friction in the field.</h2>
            <p>
              Good construction software should feel obvious under pressure. This concept strips
              navigation down to essential actions while keeping office-side oversight strong and
              easy to explain in a pitch.
            </p>

            <div className="proposal-box">
              <span className="mono-label">FRONTEND STACK</span>
              <strong>Next.js now, reusable product direction later.</strong>
              <p>
                The marketing layer can grow into authenticated frontend views, admin dashboards,
                and future product modules without throwing away the visual system.
              </p>
            </div>
          </div>

          <div className="timeline-card">
            {workflow.map((item) => (
              <article className="timeline-item" key={item.time}>
                <span>{item.time}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band wrapper" id="mobile-flows">
        <div className="section-heading">
          <span className="section-kicker">Mobile role flows</span>
          <h2>Every role gets a mobile flow with its own screen logic.</h2>
          <p>
            The landing now shows how the MVP can behave on mobile for admin, manager, worker,
            and client. Each flow keeps the same design system while adapting the actions and
            visibility to the person using it.
          </p>
          <div className="section-actions">
            <a className="button button-secondary" href="/pantallas">
              Ver flujo completo
            </a>
          </div>
        </div>

        <div className="mobile-flow-grid">
          {roleFlows.map((flow) => (
            <article className="mobile-flow-card" key={flow.role}>
              <div className="mobile-flow-meta">
                <p className="mono-label">{flow.label}</p>
                <h3>{flow.role}</h3>
                <p>{flow.intro}</p>
              </div>

              <div className="phone-shell">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-topbar">
                    <span>09:41</span>
                    <span>{flow.status}</span>
                  </div>

                  <div className="phone-header">
                    <span className="mono-label">Mobile flow</span>
                    <strong>{flow.role} app</strong>
                  </div>

                  <div className="phone-stack">
                    {flow.screens.map((screen, index) => (
                      <div className="phone-screen-card" key={screen.name}>
                        <span className="screen-index">0{index + 1}</span>
                        <div>
                          <strong>{screen.name}</strong>
                          <p>{screen.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="phone-footer">
                    <span className="phone-dot phone-dot-active" />
                    <span className="phone-dot" />
                    <span className="phone-dot" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band wrapper" id="roles">
        <div className="section-heading">
          <span className="section-kicker">Role access</span>
          <h2>Clear permissions without turning the product into a maze.</h2>
          <p>
            Each role has a different relationship to the system, but the presentation remains
            concise: admin for structure, managers for operations, workers for action, clients for
            approved visibility.
          </p>
        </div>

        <div className="role-grid">
          {roles.map((role) => (
            <article className="role-card" key={role.label}>
              <p className="mono-label">{role.label}</p>
              <h3>{role.label}</h3>
              <p>{role.copy}</p>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
