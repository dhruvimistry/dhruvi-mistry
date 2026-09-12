const groups = [
  {
    name: "Languages",
    skills: ["TypeScript", "Python", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    name: "Frontend",
    skills: [
      "Next.js 16 (App Router)",
      "React 19",
      "Tailwind CSS v4",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    name: "Backend",
    skills: [
      "FastAPI",
      "Django",
      "Django REST Framework",
      "SQLAlchemy 2.0",
      "REST API design",
      "JWT / SimpleJWT",
    ],
  },
  {
    name: "AI / LLM",
    skills: [
      "Anthropic Claude API",
      "OpenAI API",
      "RAG",
      "FAISS vector search",
      "tool/function calling",
      "SSE streaming",
      "MCP",
    ],
  },
  {
    name: "Cloud & Auth",
    skills: [
      "Azure Blob Storage",
      "Cloudflare R2 (S3-compatible)",
      "Microsoft Entra ID SSO",
      "Auth.js v5 / NextAuth",
      "OAuth 2.0",
    ],
  },
  {
    name: "Practices",
    skills: [
      "Backend-for-Frontend architecture",
      "object-level authorization",
      "Git/GitHub",
      "Docker",
    ],
  },
];
function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-[min(1120px,calc(100%-40px))] py-24 max-sm:w-[min(1120px,calc(100%-32px))] max-sm:py-18"
    >
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[.08em] text-signal">
        Toolkit / 03
      </p>
      <h2 className="mb-9 max-w-180 font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] font-semibold tracking-[-.045em]">
        Built for the full path to production.
      </h2>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line max-md:grid-cols-1">
        {groups.map((group) => (
          <article className="bg-panel p-7 max-sm:p-6" key={group.name}>
            <h3 className="mb-4.5 font-mono text-[.72rem] font-medium uppercase tracking-[.06em] text-signal">
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  className="rounded-md bg-panel-raised px-2.25 py-1.5 text-[.78rem] leading-[1.35] transition hover:bg-signal hover:text-canvas"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Skills;
