import type { Metadata } from "next";

type Tone = "system" | "admin" | "manager" | "worker" | "client" | "success" | "alert";

type ScreenCard = {
  title: string;
  detail: string;
};

type Screen = {
  id: string;
  step: string;
  role: string;
  tone: Tone;
  status: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  cards: ScreenCard[];
  cta: string;
};

type FlowSection = {
  flow: string;
  title: string;
  description: string;
  screens: Screen[];
  arrows: { label: string; tone: Tone }[];
  branches?: {
    intro: string;
    items: {
      label: string;
      tone: Tone;
      screen: Screen;
    }[];
  };
};

export const metadata: Metadata = {
  title: "CrewCore | Screens",
  description: "Mobile screen flows and role journeys for CrewCore.",
};

const legend = [
  { label: "System / automated", tone: "system" as Tone },
  { label: "Admin action", tone: "admin" as Tone },
  { label: "Manager action", tone: "manager" as Tone },
  { label: "Worker action", tone: "worker" as Tone },
  { label: "Client view", tone: "client" as Tone },
];

const flowSections: FlowSection[] = [
  {
    flow: "Flow 01",
    title: "Project kickoff and operational setup",
    description:
      "The admin builds the project structure, sets permissions, and leaves the site ready so managers and crews enter the same operating context.",
    arrows: [
      { label: "create project", tone: "admin" },
      { label: "assign manager", tone: "admin" },
      { label: "publish phase", tone: "system" },
    ],
    screens: [
      {
        id: "a1",
        step: "01",
        role: "Admin",
        tone: "admin",
        status: "HQ / CONTROL",
        title: "Master panel",
        subtitle: "A high-level view of projects, permissions, and platform activity.",
        metric: "03",
        metricLabel: "active projects",
        cards: [
          { title: "Tower B", detail: "Structure / crew A" },
          { title: "Puerto Norte", detail: "Finishes / crew C" },
          { title: "Access", detail: "Admin, manager, client" },
        ],
        cta: "New project",
      },
      {
        id: "a2",
        step: "02",
        role: "Admin",
        tone: "admin",
        status: "SETUP / PROJECT",
        title: "New project",
        subtitle: "Create the site, location, first phase, and linked client account.",
        metric: "1.2M",
        metricLabel: "base budget",
        cards: [
          { title: "Location", detail: "Downtown / Buenos Aires" },
          { title: "Initial phase", detail: "Concrete and structure" },
          { title: "Client", detail: "Northline Developments" },
        ],
        cta: "Save project",
      },
      {
        id: "a3",
        step: "03",
        role: "Admin",
        tone: "admin",
        status: "ACCESS / ROLES",
        title: "Assignments",
        subtitle: "Clear permissions for manager, worker, and client from mobile.",
        metric: "24",
        metricLabel: "active users",
        cards: [
          { title: "Manager", detail: "Lucia Moreno / full ops" },
          { title: "Crew", detail: "12 workers in phase 03" },
          { title: "Client", detail: "Approved reports only" },
        ],
        cta: "Publish access",
      },
      {
        id: "a4",
        step: "04",
        role: "System",
        tone: "system",
        status: "SITE / READY",
        title: "Project live",
        subtitle: "The system prepares the day for control, check-in, and evidence capture.",
        metric: "07:00",
        metricLabel: "shift start",
        cards: [
          { title: "Crew A", detail: "Check-in enabled" },
          { title: "Phase 03", detail: "Concrete / zone C" },
          { title: "Client", detail: "Summary pending" },
        ],
        cta: "Open day",
      },
    ],
  },
  {
    flow: "Flow 02",
    title: "Worker day on site",
    description:
      "The worker mobile experience removes friction: clock in, understand the task, upload evidence, and close the shift fast.",
    arrows: [
      { label: "arrive on site", tone: "worker" },
      { label: "review phase", tone: "worker" },
      { label: "upload evidence", tone: "worker" },
    ],
    screens: [
      {
        id: "w1",
        step: "05",
        role: "Worker",
        tone: "worker",
        status: "FIELD / ARRIVAL",
        title: "Check-in",
        subtitle: "Site, active phase, and shift schedule on a single screen.",
        metric: "07:03",
        metricLabel: "logged time",
        cards: [
          { title: "Geo verified", detail: "Tower B / north gate" },
          { title: "Shift", detail: "08h 30m expected" },
          { title: "Safety", detail: "Helmet and wet concrete" },
        ],
        cta: "Start shift",
      },
      {
        id: "w2",
        step: "06",
        role: "Worker",
        tone: "worker",
        status: "TASKS / LIVE",
        title: "My tasks",
        subtitle: "Current phase, priority, and manager notes without extra menus.",
        metric: "03",
        metricLabel: "tasks today",
        cards: [
          { title: "Zone C", detail: "Column concrete pour" },
          { title: "Material", detail: "Concrete + formwork" },
          { title: "Note", detail: "Upload photo before 14:00" },
        ],
        cta: "Open details",
      },
      {
        id: "w3",
        step: "07",
        role: "Worker",
        tone: "worker",
        status: "MEDIA / CAPTURE",
        title: "Evidence",
        subtitle: "Photos and videos go straight into the correct project folder.",
        metric: "12",
        metricLabel: "files uploaded",
        cards: [
          { title: "Photos", detail: "Column progress update" },
          { title: "Video", detail: "Quick pour inspection" },
          { title: "Tag", detail: "Phase 03 / zona C" },
        ],
        cta: "Upload files",
      },
      {
        id: "w4",
        step: "08",
        role: "Worker",
        tone: "worker",
        status: "SHIFT / CLOSE",
        title: "Check-out",
        subtitle: "Shift close with hours, notes, and end-of-day confirmation.",
        metric: "08h 21m",
        metricLabel: "worked time",
        cards: [
          { title: "Check-out", detail: "Geo-verified check-out" },
          { title: "Summary", detail: "Tasks completed 2/3" },
          { title: "Alert", detail: "Blocker: delayed material" },
        ],
        cta: "Close shift",
      },
    ],
  },
  {
    flow: "Flow 03",
    title: "Manager: control, reporting, and decisions",
    description:
      "The manager turns field activity into visibility: attendance, progress, incidents, and a report that is ready to share.",
    arrows: [
      { label: "review crews", tone: "manager" },
      { label: "validate progress", tone: "manager" },
      { label: "choose outcome", tone: "manager" },
    ],
    branches: {
      intro: "From screen 11 the manager can publish progress or open an issue:",
      items: [
        {
          label: "Publish to client",
          tone: "success",
          screen: {
            id: "m4a",
            step: "12A",
            role: "Client",
            tone: "success",
            status: "CLIENT / APPROVED",
            title: "Approved summary",
            subtitle: "The client receives curated information that is ready to review.",
            metric: "87%",
            metricLabel: "phase progress",
            cards: [
              { title: "Report", detail: "Published 17:42" },
              { title: "Milestones", detail: "2 completed today" },
              { title: "Evidence", detail: "6 approved files" },
            ],
            cta: "Open report",
          },
        },
        {
          label: "Open issue",
          tone: "alert",
          screen: {
            id: "m4b",
            step: "12B",
            role: "Admin",
            tone: "alert",
            status: "ISSUE / ESCALATED",
            title: "Incident",
            subtitle: "The blocker is logged with owner, impact, and next action.",
            metric: "02",
            metricLabel: "critical risks",
            cards: [
              { title: "Reason", detail: "Material delay" },
              { title: "Impact", detail: "Affects phase 03 / 1 day" },
              { title: "Action", detail: "Reassign crew tomorrow" },
            ],
            cta: "Escalate issue",
          },
        },
      ],
    },
    screens: [
      {
        id: "m1",
        step: "09",
        role: "Manager",
        tone: "manager",
        status: "OPS / OVERVIEW",
        title: "Dashboard",
        subtitle: "Attendance, progress, and alerts in one operational view.",
        metric: "12/12",
        metricLabel: "crew on site",
        cards: [
          { title: "Tower B", detail: "Phase 03 en curso" },
          { title: "Check-ins", detail: "100% confirmed" },
          { title: "Alertas", detail: "1 blocker detected" },
        ],
        cta: "Open control",
      },
      {
        id: "m2",
        step: "10",
        role: "Manager",
        tone: "manager",
        status: "REVIEW / PROGRESS",
        title: "Validation",
        subtitle: "Cross-checks tasks, hours, and media to confirm the real site status.",
        metric: "18",
        metricLabel: "evidence items",
        cards: [
          { title: "Photos", detail: "Columns / zone C" },
          { title: "Horas", detail: "08h average per worker" },
          { title: "Notes", detail: "Supplier delay" },
        ],
        cta: "Validate progress",
      },
      {
        id: "m3",
        step: "11",
        role: "Manager",
        tone: "manager",
        status: "REPORT / READY",
        title: "Report ready",
        subtitle: "Daily summary ready to publish to the client or escalate to admin.",
        metric: "17:42",
        metricLabel: "closing time",
        cards: [
          { title: "Summary", detail: "2 milestones completed" },
          { title: "Delay", detail: "1 pending material" },
          { title: "Weather", detail: "No operational impact" },
        ],
        cta: "Choose path",
      },
    ],
  },
  {
    flow: "Flow 04",
    title: "Client: clean, approved visibility",
    description:
      "The client does not enter operational complexity. They see progress, approved reports, and curated evidence through a short premium flow.",
    arrows: [
      { label: "open summary", tone: "client" },
      { label: "review report", tone: "client" },
    ],
    screens: [
      {
        id: "c1",
        step: "13",
        role: "Client",
        tone: "client",
        status: "CLIENT / HOME",
        title: "Overview",
        subtitle: "Project status, current milestone, and a clean progress signal.",
        metric: "72%",
        metricLabel: "overall progress",
        cards: [
          { title: "Project", detail: "Tower B / Downtown" },
          { title: "Phase", detail: "Structural concrete" },
          { title: "Last update", detail: "Today 17:42" },
        ],
        cta: "View progress",
      },
      {
        id: "c2",
        step: "14",
        role: "Client",
        tone: "client",
        status: "REPORT / APPROVED",
        title: "Daily report",
        subtitle: "A manager-approved summary with milestones, incidents, and next steps.",
        metric: "02",
        metricLabel: "daily milestones",
        cards: [
          { title: "Completed", detail: "Zone C concrete pour finished" },
          { title: "Risk", detail: "Tomorrow delivery delayed" },
          { title: "Next step", detail: "Early inspection" },
        ],
        cta: "Download PDF",
      },
      {
        id: "c3",
        step: "15",
        role: "Client",
        tone: "client",
        status: "FILES / CURATED",
        title: "Evidence",
        subtitle: "Photos, videos, and files filtered for executive project review.",
        metric: "06",
        metricLabel: "approved files",
        cards: [
          { title: "Photos", detail: "Before / after pour" },
          { title: "Video", detail: "Short site walkthrough" },
          { title: "Document", detail: "Signed daily record" },
        ],
        cta: "Open folder",
      },
    ],
  },
];

function FlowArrow({ label, tone }: { label: string; tone: Tone }) {
  return (
    <div className="flow-arrow" data-tone={tone}>
      <span>{label}</span>
      <div className="flow-arrow-line">
        <div className="flow-arrow-dash" />
        <div className="flow-arrow-tip">▶</div>
      </div>
    </div>
  );
}

function ScreenPhone({ screen }: { screen: Screen }) {
  return (
    <div className="phone-node">
      <div className="phone-step">
        {screen.step} · {screen.role}
      </div>
      <div className="diagram-phone" data-tone={screen.tone}>
        <div className="diagram-phone-frame">
          <div className="diagram-phone-top">
            <span>09:41</span>
            <span>{screen.status}</span>
          </div>
          <div className="diagram-phone-body">
            <span className="diagram-role">{screen.role}</span>
            <h3>{screen.title}</h3>
            <p>{screen.subtitle}</p>

            <div className="diagram-metric">
              <strong>{screen.metric}</strong>
              <span>{screen.metricLabel}</span>
            </div>

            <div className="diagram-card-stack">
              {screen.cards.map((card) => (
                <div className="diagram-card" key={card.title}>
                  <strong>{card.title}</strong>
                  <span>{card.detail}</span>
                </div>
              ))}
            </div>

            <div className="diagram-cta">{screen.cta}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PantallasPage() {
  return (
    <main className="screenflow-page">
      <div className="site-noise" aria-hidden="true" />
      <div className="wrapper screenflow-shell">
        <header className="screenflow-hero">
          <a className="screenflow-back" href="/">
            ← Back to landing
          </a>
          <p className="screenflow-kicker">CrewCore / Screens</p>
          <h1>Real screen flows for a construction operations app.</h1>
          <p className="screenflow-sub">
            Built from the same visual-document pattern you shared: horizontal journeys,
            action arrows, and mobile screens by role. Everything is adapted to CrewCore with the same
            industrial construction language.
          </p>

          <div className="screenflow-toolbar">
            <div className="screenflow-legend">
              {legend.map((item) => (
                <div className="screenflow-legend-item" key={item.label}>
                  <span className="screenflow-legend-dot" data-tone={item.tone} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="language-switch">
              <span className="language-switch-label">Language</span>
              <div className="language-switch-actions">
                <a className="language-chip" href="/pantallas">
                  ES
                </a>
                <a className="language-chip is-active" href="/screens">
                  EN
                </a>
              </div>
            </div>
          </div>
        </header>

        {flowSections.map((section) => (
          <section className="screenflow-section" key={section.flow}>
            <div className="screenflow-section-head">
              <p>{section.flow}</p>
              <h2>{section.title}</h2>
              <span>{section.description}</span>
            </div>

            <div className="screenflow-scroll">
              <div className="screenflow-row">
                {section.screens.map((screen, index) => (
                  <div className="screenflow-fragment" key={screen.id}>
                    <ScreenPhone screen={screen} />
                    {index < section.arrows.length ? (
                      <FlowArrow
                        label={section.arrows[index].label}
                        tone={section.arrows[index].tone}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            {section.branches ? (
              <div className="screenflow-branches">
                <p>{section.branches.intro}</p>
                <div className="screenflow-branch-grid">
                  {section.branches.items.map((branch) => (
                    <div className="screenflow-branch-col" key={branch.label}>
                      <div className="screenflow-branch-pill" data-tone={branch.tone}>
                        {branch.label}
                      </div>
                      <div className="screenflow-branch-arrow" data-tone={branch.tone}>
                        <span>↓</span>
                      </div>
                      <ScreenPhone screen={branch.screen} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
