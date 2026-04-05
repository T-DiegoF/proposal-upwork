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
  title: "CrewCore | Pantallas",
  description: "Mapa de pantallas mobile y flujos por rol para CrewCore.",
};

const legend = [
  { label: "Sistema / automático", tone: "system" as Tone },
  { label: "Acción admin", tone: "admin" as Tone },
  { label: "Acción manager", tone: "manager" as Tone },
  { label: "Acción worker", tone: "worker" as Tone },
  { label: "Vista client", tone: "client" as Tone },
];

const flowSections: FlowSection[] = [
  {
    flow: "Flujo 01",
    title: "Inicio de obra y configuración operativa",
    description:
      "El admin arma la estructura del proyecto, define permisos y deja la obra lista para que el manager y las cuadrillas entren en el mismo contexto.",
    arrows: [
      { label: "crea proyecto", tone: "admin" },
      { label: "asigna manager", tone: "admin" },
      { label: "publica fase", tone: "system" },
    ],
    screens: [
      {
        id: "a1",
        step: "01",
        role: "Admin",
        tone: "admin",
        status: "HQ / CONTROL",
        title: "Panel maestro",
        subtitle: "Vista general de obras, permisos y actividad del sistema.",
        metric: "03",
        metricLabel: "obras activas",
        cards: [
          { title: "Tower B", detail: "Estructura / cuadrilla A" },
          { title: "Puerto Norte", detail: "Terminaciones / cuadrilla C" },
          { title: "Accesos", detail: "Admin, manager, client" },
        ],
        cta: "Nueva obra",
      },
      {
        id: "a2",
        step: "02",
        role: "Admin",
        tone: "admin",
        status: "SETUP / PROJECT",
        title: "Nueva obra",
        subtitle: "Alta del proyecto, ubicación, fase inicial y cliente asociado.",
        metric: "1.2M",
        metricLabel: "presupuesto base",
        cards: [
          { title: "Ubicación", detail: "Downtown / Buenos Aires" },
          { title: "Fase inicial", detail: "Hormigón y estructura" },
          { title: "Cliente", detail: "Northline Developments" },
        ],
        cta: "Guardar proyecto",
      },
      {
        id: "a3",
        step: "03",
        role: "Admin",
        tone: "admin",
        status: "ACCESS / ROLES",
        title: "Asignación",
        subtitle: "Permisos claros para manager, worker y client desde mobile.",
        metric: "24",
        metricLabel: "usuarios activos",
        cards: [
          { title: "Manager", detail: "Lucia Moreno / full ops" },
          { title: "Crew", detail: "12 workers en fase 03" },
          { title: "Client", detail: "Solo reportes aprobados" },
        ],
        cta: "Publicar acceso",
      },
      {
        id: "a4",
        step: "04",
        role: "Sistema",
        tone: "system",
        status: "SITE / READY",
        title: "Obra activa",
        subtitle: "El sistema deja lista la jornada para control, check-in y evidencia.",
        metric: "07:00",
        metricLabel: "inicio de turno",
        cards: [
          { title: "Crew A", detail: "Check-in habilitado" },
          { title: "Fase 03", detail: "Hormigón / zona C" },
          { title: "Cliente", detail: "Resumen pendiente" },
        ],
        cta: "Ver jornada",
      },
    ],
  },
  {
    flow: "Flujo 02",
    title: "Jornada del worker en obra",
    description:
      "La experiencia mobile del worker reduce pasos al mínimo: entrar, entender la tarea, subir evidencia y cerrar la jornada sin fricción.",
    arrows: [
      { label: "entra al sitio", tone: "worker" },
      { label: "revisa fase", tone: "worker" },
      { label: "sube evidencia", tone: "worker" },
    ],
    screens: [
      {
        id: "w1",
        step: "05",
        role: "Worker",
        tone: "worker",
        status: "FIELD / ARRIVAL",
        title: "Check-in",
        subtitle: "Sitio, fase activa y horario del turno en una sola pantalla.",
        metric: "07:03",
        metricLabel: "hora registrada",
        cards: [
          { title: "Geo verificado", detail: "Tower B / acceso norte" },
          { title: "Turno", detail: "08h 30m esperadas" },
          { title: "Safety", detail: "Casco y hormigón húmedo" },
        ],
        cta: "Entrar a obra",
      },
      {
        id: "w2",
        step: "06",
        role: "Worker",
        tone: "worker",
        status: "TASKS / LIVE",
        title: "Mis tareas",
        subtitle: "Fase actual, prioridad y comentarios del manager sin menús extra.",
        metric: "03",
        metricLabel: "tareas del día",
        cards: [
          { title: "Zona C", detail: "Vertido de columnas" },
          { title: "Material", detail: "Hormigón + encofrado" },
          { title: "Nota", detail: "Foto antes de 14:00" },
        ],
        cta: "Ver detalle",
      },
      {
        id: "w3",
        step: "07",
        role: "Worker",
        tone: "worker",
        status: "MEDIA / CAPTURE",
        title: "Evidencia",
        subtitle: "Fotos y videos se guardan directo en el proyecto correcto.",
        metric: "12",
        metricLabel: "archivos subidos",
        cards: [
          { title: "Fotos", detail: "Progreso de columnas" },
          { title: "Video", detail: "Inspección rápida del vaciado" },
          { title: "Tag", detail: "Fase 03 / zona C" },
        ],
        cta: "Subir archivos",
      },
      {
        id: "w4",
        step: "08",
        role: "Worker",
        tone: "worker",
        status: "SHIFT / CLOSE",
        title: "Salida",
        subtitle: "Cierre del turno con horas, notas y confirmación de fin de jornada.",
        metric: "08h 21m",
        metricLabel: "tiempo trabajado",
        cards: [
          { title: "Check-out", detail: "Salida geoverificada" },
          { title: "Resumen", detail: "Tareas completadas 2/3" },
          { title: "Aviso", detail: "Bloqueo: material retrasado" },
        ],
        cta: "Cerrar turno",
      },
    ],
  },
  {
    flow: "Flujo 03",
    title: "Manager: control, reporte y decisión",
    description:
      "El manager convierte la actividad del campo en visibilidad real: attendance, progreso, incidencias y reporte listo para compartir.",
    arrows: [
      { label: "revisa cuadrillas", tone: "manager" },
      { label: "valida avance", tone: "manager" },
      { label: "decide publicar", tone: "manager" },
    ],
    branches: {
      intro: "Desde la pantalla 11 el manager puede publicar avance o abrir incidencia:",
      items: [
        {
          label: "Publica al cliente",
          tone: "success",
          screen: {
            id: "m4a",
            step: "12A",
            role: "Client",
            tone: "success",
            status: "CLIENT / APPROVED",
            title: "Resumen aprobado",
            subtitle: "El cliente recibe solo información curada y lista para revisar.",
            metric: "87%",
            metricLabel: "avance de fase",
            cards: [
              { title: "Reporte", detail: "Publicado 17:42" },
              { title: "Hitos", detail: "2 completados hoy" },
              { title: "Evidencia", detail: "6 archivos aprobados" },
            ],
            cta: "Abrir reporte",
          },
        },
        {
          label: "Abre incidencia",
          tone: "alert",
          screen: {
            id: "m4b",
            step: "12B",
            role: "Admin",
            tone: "alert",
            status: "ISSUE / ESCALATED",
            title: "Incidencia",
            subtitle: "El bloqueo queda trazado con responsable, impacto y plan de acción.",
            metric: "02",
            metricLabel: "riesgos críticos",
            cards: [
              { title: "Motivo", detail: "Retraso en materiales" },
              { title: "Impacto", detail: "Afecta fase 03 / 1 día" },
              { title: "Acción", detail: "Reasignar cuadrilla mañana" },
            ],
            cta: "Escalar caso",
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
        subtitle: "Attendance, avance y alertas en una sola lectura de obra.",
        metric: "12/12",
        metricLabel: "crew presente",
        cards: [
          { title: "Tower B", detail: "Fase 03 en curso" },
          { title: "Check-ins", detail: "100% confirmados" },
          { title: "Alertas", detail: "1 bloqueo detectado" },
        ],
        cta: "Abrir control",
      },
      {
        id: "m2",
        step: "10",
        role: "Manager",
        tone: "manager",
        status: "REVIEW / PROGRESS",
        title: "Validación",
        subtitle: "Cruza tareas, horas y evidencia para confirmar el estado real.",
        metric: "18",
        metricLabel: "evidencias del día",
        cards: [
          { title: "Fotos", detail: "Columnas zona C" },
          { title: "Horas", detail: "08h promedio por worker" },
          { title: "Notas", detail: "Demora de proveedor" },
        ],
        cta: "Validar avance",
      },
      {
        id: "m3",
        step: "11",
        role: "Manager",
        tone: "manager",
        status: "REPORT / READY",
        title: "Reporte listo",
        subtitle: "Resumen diario listo para cliente o para escalar a admin si hay desvíos.",
        metric: "17:42",
        metricLabel: "hora de cierre",
        cards: [
          { title: "Resumen", detail: "2 hitos completados" },
          { title: "Retrasos", detail: "1 material pendiente" },
          { title: "Clima", detail: "Sin impacto operativo" },
        ],
        cta: "Elegir salida",
      },
    ],
  },
  {
    flow: "Flujo 04",
    title: "Cliente: visibilidad limpia y aprobada",
    description:
      "El cliente no entra a la complejidad operativa. Ve progreso, reportes y evidencia aprobada desde un flujo corto y premium.",
    arrows: [
      { label: "abre resumen", tone: "client" },
      { label: "revisa reporte", tone: "client" },
    ],
    screens: [
      {
        id: "c1",
        step: "13",
        role: "Client",
        tone: "client",
        status: "CLIENT / HOME",
        title: "Vista general",
        subtitle: "Estado de obra, hito actual y señal de avance sin ruido interno.",
        metric: "72%",
        metricLabel: "avance total",
        cards: [
          { title: "Proyecto", detail: "Tower B / Downtown" },
          { title: "Fase", detail: "Hormigón estructural" },
          { title: "Último update", detail: "Hoy 17:42" },
        ],
        cta: "Ver progreso",
      },
      {
        id: "c2",
        step: "14",
        role: "Client",
        tone: "client",
        status: "REPORT / APPROVED",
        title: "Reporte diario",
        subtitle: "Resumen aprobado por el manager con hitos, incidentes y próximos pasos.",
        metric: "02",
        metricLabel: "hitos del día",
        cards: [
          { title: "Completado", detail: "Zona C hormigonada" },
          { title: "Riesgo", detail: "Entrega demorada mañana" },
          { title: "Próximo paso", detail: "Inspección temprana" },
        ],
        cta: "Descargar PDF",
      },
      {
        id: "c3",
        step: "15",
        role: "Client",
        tone: "client",
        status: "FILES / CURATED",
        title: "Evidencia",
        subtitle: "Fotos, videos y archivos filtrados para lectura ejecutiva del proyecto.",
        metric: "06",
        metricLabel: "archivos aprobados",
        cards: [
          { title: "Fotos", detail: "Antes / después de vaciado" },
          { title: "Video", detail: "Recorrido corto de obra" },
          { title: "Documento", detail: "Parte diario firmado" },
        ],
        cta: "Abrir carpeta",
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
            ← Volver a la landing
          </a>
          <p className="screenflow-kicker">CrewCore / Pantallas</p>
          <h1>Flujos con pantallas reales para una app de obra.</h1>
          <p className="screenflow-sub">
            Inspirado en el formato de documento visual que compartiste: recorridos horizontales,
            flechas por accion y pantallas mobile por rol. Todo adaptado a CrewCore con la misma
            estetica industrial y enfoque de construccion.
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
              <span className="language-switch-label">Idioma</span>
              <div className="language-switch-actions">
                <a className="language-chip is-active" href="/pantallas">
                  ES
                </a>
                <a className="language-chip" href="/screens">
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
