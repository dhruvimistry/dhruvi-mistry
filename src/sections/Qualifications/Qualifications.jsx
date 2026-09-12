/* eslint-disable react/prop-types */
const reviewBullets = [
  "Built full-stack features across database schemas, REST APIs, BFF routes, and responsive UI using Next.js, React, TypeScript, FastAPI, SQLAlchemy, and PostgreSQL.",
  "Enhanced RAG and agentic retrieval with tool calling, vector search, and context management—reducing agentic context per search by 73%.",
  "Developed LLM conversational experiences with history, SSE streaming, reasoning-model support, and per-request token usage tracking.",
  "Implemented role-based and object-level authorization, Microsoft Entra ID SSO via Auth.js, and a stateless BFF that keeps access tokens out of the browser.",
  "Migrated legacy data to PostgreSQL with an Alembic schema baseline; implemented Cloudflare R2 and Azure Blob Storage for documents and artifacts.",
  "Built secure API-key machine-to-machine ingestion APIs, expiring protected-document links, and sensitive-log redaction.",
  "Improved frontend performance through table virtualization and state optimization; built PDF and DICOM viewers with citation-based navigation.",
  "Maintained Vitest and pytest coverage under strict TypeScript and ESLint checks.",
];
const eyebrow =
  "mb-3 font-mono text-xs font-medium uppercase tracking-[.08em] text-signal";
const bullets =
  "grid gap-2.5 m-0 list-none p-0 text-[.94rem] leading-6.5 text-muted [&_li]:relative [&_li]:pl-4.5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:content-['↳'] [&_li]:before:text-signal";
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
            <p className="mt-6 mb-3.5 font-mono text-[.73rem] font-medium uppercase tracking-[.04em] text-signal">
              AI Document Review Platform{" "}
              <span className="text-muted">
                · US healthcare-SaaS client · Sept 2025–Present
              </span>
            </p>
            <BulletList items={reviewBullets} />
            <div className="mt-7 border-t border-dashed border-line pt-px">
              <p className="mt-6 mb-3.5 font-mono text-[.73rem] font-medium uppercase tracking-[.04em] text-signal">
                Learning Platform{" "}
                <span className="text-muted">
                  · Client engagement · Jul 2025
                </span>
              </p>
              <BulletList
                items={[
                  "Built a React + Vite front end using Redux Toolkit, Firebase, Chart.js dashboards, and Framer Motion transitions.",
                ]}
              />
            </div>
          </div>
        </article>
        <article className="grid grid-cols-[180px_1fr] gap-8 border-b border-line py-8 max-md:grid-cols-1 max-md:gap-3.5 max-md:py-6.5">
          <div className="font-mono text-[.7rem] font-medium uppercase tracking-wider text-muted">
            Jan — Apr 2025
          </div>
          <div>
            <p className="m-0 font-mono text-[.73rem] font-medium uppercase tracking-[.04em] text-signal">
              Front-End Developer Intern
            </p>
            <h3 className={heading}>Wappzo Infotech Pvt. Ltd.</h3>
            <BulletList
              items={[
                "Built an NGO–volunteer matching platform in Figma, React.js, TypeScript, and Bootstrap.",
                "Implemented registration, login authentication, and event-application flows against REST APIs.",
              ]}
            />
          </div>
        </article>
        <article className="grid grid-cols-[180px_1fr] gap-8 border-b border-line py-8 max-md:grid-cols-1 max-md:gap-3.5 max-md:py-6.5">
          <div className="font-mono text-[.7rem] font-medium uppercase tracking-wider text-muted">
            Jun — Jul 2024
          </div>
          <div>
            <p className="m-0 font-mono text-[.73rem] font-medium uppercase tracking-[.04em] text-signal">
              Web Developer Intern
            </p>
            <h3 className={heading}>CodeSpeedy Technologies Pvt. Ltd.</h3>
            <BulletList
              items={[
                "Built a login-page UI with a password-visibility toggle and drag-and-drop file-upload components in vanilla JavaScript.",
              ]}
            />
          </div>
        </article>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-12 rounded-2xl border border-line bg-panel p-8 shadow-panel max-md:grid-cols-1 max-md:gap-8 max-md:p-6.5">
        <div>
          <p className={eyebrow}>Education</p>
          <h3 className={heading}>B.E., Information Technology</h3>
          <p className="m-0 text-[.92rem] leading-6.5 text-muted">
            Sardar Vallabhbhai Patel Institute of Technology, Vasad
          </p>
          <p className="font-mono text-[.75rem] font-medium text-signal">
            2021–2025 · CGPA 8.65
          </p>
        </div>
        <div>
          <p className={eyebrow}>Certifications</p>
          <ul className="grid gap-2.5 m-0 pl-4.5 text-[.9rem] leading-6 text-muted marker:text-signal">
            <li>
              Anthropic — AI Fluency / Prompt Engineering &amp; Claude API
              coursework
            </li>
            <li>
              Code Unnati Program — Edunet Foundation &amp; SAP (Data Science,
              ML, AI, IoT)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Qualifications;
