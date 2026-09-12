const projects = [
  {
    title: "Online Bookstore",
    stack: ["Django REST Framework", "Next.js 15", "shadcn/ui"],
    why: "A complete commerce workflow that connects a type-safe interface to secure, inventory-aware backend operations.",
    bullets: [
      "Designed REST APIs and data models in DRF with SimpleJWT email/password authentication.",
      "Built the storefront in Next.js 15 with shadcn/ui, React Hook Form, and Zod validation, protecting routes with Next.js middleware.",
      "Implemented cart and checkout flows: cart models, order placement, and inventory quantity handling.",
    ],
  },
  {
    title: "Claude MCP CLI Agent",
    stack: ["Python", "Anthropic Claude API", "Model Context Protocol"],
    why: "A hands-on exploration of the protocol layer that turns a model into a useful, tool-capable agent.",
    bullets: [
      "Built a command-line AI agent through Anthropic's engineering courses.",
      "Implemented an MCP client and server with custom tool definitions and a multi-turn chat loop.",
    ],
  },
];
function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-[min(1120px,calc(100%-40px))] py-24 max-sm:w-[min(1120px,calc(100%-32px))] max-sm:py-18"
    >
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[.08em] text-signal">
        Selected work / 02
      </p>
      <h2 className="mb-9 max-w-180 font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] font-semibold tracking-[-.045em]">
        Projects that make the implementation visible.
      </h2>
      <p className="-mt-5.5 mb-9 max-w-180 text-base leading-7 text-muted">
        Two focused builds across commerce, authentication, and the AI agent
        toolchain.
      </p>
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        {projects.map((project, index) => (
          <article
            className="min-h-full rounded-2xl border border-line bg-panel p-7 transition hover:-translate-y-1 hover:border-signal hover:shadow-panel max-sm:p-6"
            key={project.title}
          >
            <div className="flex justify-between font-mono text-[.72rem] font-medium text-signal">
              <span>0{index + 1}</span>
              <span className="text-muted">Build</span>
            </div>
            <h3 className="mt-7 mb-4 font-display text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.1] font-semibold tracking-[-.045em]">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  className="rounded-full border border-line px-2 py-1 font-mono text-[.67rem] font-medium text-muted"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-6 mb-4 text-[.92rem] leading-6 text-muted">
              <b className="text-ink">Why it matters:</b> {project.why}
            </p>
            <ul className="grid gap-2.5 pl-4.5 text-[.9rem] leading-6 text-muted marker:text-signal">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Projects;
