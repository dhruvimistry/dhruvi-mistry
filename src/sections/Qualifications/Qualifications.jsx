/* eslint-disable react/prop-types */
import { BadgeCheck, GraduationCap } from "lucide-react";

const highlights = [
  {
    metric: "73%",
    label: "less agent context per search",
    copy: "Reworked RAG and agentic retrieval with tool calling, vector search, and deliberate context management.",
  },
  {
    metric: "SSE",
    label: "streaming AI conversations",
    copy: "Built history-aware LLM experiences with reasoning-model support and per-request token visibility.",
  },
  {
    metric: "SSO",
    label: "secure, stateless access",
    copy: "Integrated Entra ID through Auth.js and a BFF that centralizes tokens outside the browser.",
  },
];
const alsoShipped = [
  "PostgreSQL migration and Alembic schema baseline, plus Cloudflare R2 and Azure Blob Storage for documents and generated artifacts.",
  "API-key machine-to-machine ingestion, protected expiring document links, and sensitive-log redaction.",
  "Interactive PDF and DICOM viewers with citation navigation, table virtualization, and maintained Vitest/pytest coverage.",
];
const eyebrow =
  "mb-3 font-mono text-xs font-medium uppercase tracking-[.08em] text-signal";
const bullets =
  "grid gap-2.5 m-0 list-none p-0 text-[.9rem] leading-6 text-muted [&_li]:relative [&_li]:pl-4.5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:content-['↳'] [&_li]:before:text-signal";
const heading =
  "mt-1 mb-2.5 font-display text-[clamp(1.35rem,2.5vw,2rem)] leading-[1.15] font-semibold tracking-[-.04em]";
function BulletList({ items }) {
  return (
    <ul className={bullets}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
function Qualifications() {
  return (
    <section
      id="experience"
      className="mx-auto w-[min(1120px,calc(100%-40px))] py-24 pb-17.5 max-sm:w-[min(1120px,calc(100%-32px))] max-sm:py-18"
    >
      <p className={eyebrow}>Experience / 01</p>
      <h2 className="mb-9 max-w-180 font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] font-semibold tracking-[-.045em]">
        Engineering AI systems from schema to interface.
      </h2>
      <div className="border-t border-line">
        <article className="grid grid-cols-[180px_1fr] gap-8 border-b border-line py-10.5 max-md:grid-cols-1 max-md:gap-3.5 max-md:py-8">
          <div className="flex flex-col gap-1.5 font-mono text-[.7rem] font-medium uppercase tracking-wider text-muted">
            <span>Jun 2025 — Present</span>
            <span>Ahmedabad, India</span>
          </div>
          <div>
            <p className="m-0 font-mono text-[.73rem] font-medium uppercase tracking-[.04em] text-signal">
              Junior Software Developer
            </p>
            <h3 className={heading}>Pragnakalp Techlabs</h3>
            <p className="mb-5 text-[.85rem] text-muted">
              Software Trainee, Jun–Dec 2025 → Junior Software Developer, Dec
              2025–Present
            </p>
            <div className="mt-7 rounded-2xl border border-line bg-panel p-6 max-sm:p-5">
              <p className="m-0 font-mono text-[.73rem] font-medium uppercase tracking-[.04em] text-signal">
                AI Document Review Platform{" "}
                <span className="text-muted">
                  · US healthcare SaaS · Sept 2025–Present
                </span>
              </p>
              <p className="mt-4 mb-0 max-w-175 leading-7 text-muted">
                A secure healthcare document-review workspace that helps
                clinical and operations teams retrieve evidence across complex
                files, review it in context, and act on it with confidence.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 max-md:grid-cols-1">
                {highlights.map((highlight) => (
                  <div
                    className="rounded-xl border border-line bg-panel-raised p-4"
                    key={highlight.metric}
                  >
                    <p className="m-0 font-display text-2xl font-semibold tracking-tighter text-signal">
                      {highlight.metric}
                    </p>
                    <p className="mt-1 mb-2 font-mono text-[.65rem] font-medium uppercase tracking-wider text-ink">
                      {highlight.label}
                    </p>
                    <p className="m-0 text-[.8rem] leading-5 text-muted">
                      {highlight.copy}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Next.js + FastAPI",
                  "PostgreSQL + Alembic",
                  "Cloudflare R2 + Azure Blob",
                  "Vitest + pytest",
                ].map((tech) => (
                  <span
                    className="rounded-full border border-line px-2 py-1 font-mono text-[.67rem] text-muted"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <details className="group mt-6 border-t border-dashed border-line pt-4">
                <summary className="cursor-pointer font-mono text-[.72rem] font-medium uppercase tracking-wider text-signal marker:content-none">
                  Also shipped{" "}
                  <span className="ml-1 text-muted group-open:hidden">+</span>
                  <span className="ml-1 hidden text-muted group-open:inline">
                    −
                  </span>
                </summary>
                <div className="mt-4">
                  <BulletList items={alsoShipped} />
                </div>
              </details>
            </div>
            <p className="mt-5 mb-0 text-[.85rem] leading-6 text-muted">
              <span className="font-mono text-[.7rem] uppercase tracking-wider text-signal">
                Learning Platform · Jul 2025
              </span>{" "}
              — Built a React + Vite front end with Redux Toolkit, Firebase,
              Chart.js dashboards, and Framer Motion.
            </p>
            <p className="mt-3 mb-0 flex items-start gap-2 text-[.82rem] leading-6 text-muted">
              <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
              Completed Anthropic&apos;s AI Fluency / Claude API coursework during this role.
            </p>
          </div>
        </article>
        <div className="border-b border-line py-6">
          <p className="mb-3 font-mono text-[.7rem] font-medium uppercase tracking-[.06em] text-muted">
            Earlier experience
          </p>
          <div className="grid gap-3 text-[.85rem] leading-6 text-muted">
            <p className="m-0">
              <span className="font-medium text-ink">
                Front-End Developer Intern · Wappzo Infotech
              </span>{" "}
              <span className="font-mono text-[.7rem]">· Jan–Apr 2025</span> —
              Built an NGO–volunteer matching platform with React, TypeScript,
              REST-backed authentication, and event applications.
            </p>
            <p className="m-0">
              <span className="font-medium text-ink">
                Web Developer Intern · CodeSpeedy Technologies
              </span>{" "}
              <span className="font-mono text-[.7rem]">· Jun–Jul 2024</span> —
              Built polished vanilla-JavaScript login and drag-and-drop upload
              interfaces.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 rounded-2xl border border-line bg-panel p-8 shadow-panel max-md:p-6.5">
        <p className="mb-3 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[.08em] text-signal">
          <GraduationCap className="h-4 w-4" aria-hidden="true" />
          Education
        </p>
        <h3 className={heading}>B.E., Information Technology</h3>
        <p className="m-0 text-[.92rem] leading-6.5 text-muted">
          Sardar Vallabhbhai Patel Institute of Technology, Vasad
        </p>
        <p className="mb-4 font-mono text-[.75rem] font-medium text-signal">
          2021–2025 · CGPA 8.65
        </p>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-[.75rem] text-muted">
        <span className="font-mono text-[.65rem] font-medium uppercase tracking-wider text-signal">
          Professional development
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2 py-1 font-mono text-[.65rem]">
          <BadgeCheck className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
          Code Unnati · Edunet Foundation &amp; SAP
        </span>
      </div>
    </section>
  );
}
export default Qualifications;
