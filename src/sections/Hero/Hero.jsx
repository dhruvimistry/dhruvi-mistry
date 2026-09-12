import { useTheme } from "../../common/ThemeContext";
const shell =
  "mx-auto w-[min(1120px,calc(100%-40px))] max-sm:w-[min(1120px,calc(100%-32px))]";
const monoLink =
  "font-mono text-[.78rem] font-medium text-muted no-underline transition-colors hover:text-signal";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  return (
    <section
      id="home"
      className={`${shell} flex min-h-[min(820px,100svh)] flex-col max-sm:min-h-180`}
    >
      <nav
        className="flex min-h-20 items-center justify-between border-b border-line max-sm:min-h-16"
        aria-label="Primary navigation"
      >
        <a
          className="font-display text-[1.35rem] leading-none font-bold tracking-[-.08em] no-underline"
          href="#home"
        >
          DM<span className="text-signal">.</span>
        </a>
        <div className="flex gap-6 max-sm:hidden">
          <a className={monoLink} href="#experience">
            Experience
          </a>
          <a className={monoLink} href="#projects">
            Projects
          </a>
          <a className={monoLink} href="#skills">
            Skills
          </a>
          <a className={monoLink} href="#contact">
            Contact
          </a>
        </div>
        <button
          className="size-8.5 rounded-full border border-line bg-panel text-base transition hover:rotate-18 hover:border-signal"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          <span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
        </button>
      </nav>
      <div className="max-w-220 py-[clamp(82px,15vh,150px)] pb-19 max-sm:py-22 max-sm:pb-13">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[.08em] text-signal">
          Full-stack AI engineer · India
        </p>
        <p className="mb-6 font-mono text-[clamp(.9rem,1.7vw,1.12rem)] leading-[1.45] font-medium text-signal">
          I build production LLM features, not just chatbots.
        </p>
        <h1 className="m-0 max-w-200 font-display text-[clamp(4rem,11vw,8.8rem)] leading-[.82] font-semibold tracking-[-.09em]">
          Dhruvi
          <br />
          <em className="not-italic text-signal">Mistry.</em>
        </h1>
        <p className="mt-8.5 mb-4 max-w-190 font-display text-[clamp(1.1rem,2.2vw,1.55rem)] leading-[1.42] font-semibold tracking-[-.03em]">
          Full-Stack AI Engineer <span className="text-signal">—</span> Next.js
          / React / TypeScript · Python (FastAPI, Django) · AI &amp; LLM
          Applications
        </p>
        <p className="m-0 max-w-177.5 text-base leading-7 text-muted">
          Full-stack engineer with 1+ year at an AI consultancy, delivering
          production web applications end to end. I ship LLM features with
          Claude and OpenAI—from FAISS-backed retrieval and tool-calling agents
          to streaming responses and token-cost instrumentation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 max-sm:flex-col">
          <a
            className="inline-flex min-h-11.5 items-center justify-center rounded-lg border border-signal bg-signal px-4.5 font-bold text-canvas no-underline transition hover:-translate-y-0.5 hover:bg-signal-strong"
            href="/dhruvi-mistry-resume.pdf"
            download
          >
            Download résumé ↓
          </a>
          <a
            className="inline-flex min-h-11.5 items-center justify-center rounded-lg border border-line px-4.5 font-bold no-underline transition hover:-translate-y-0.5 hover:border-signal hover:bg-panel-raised"
            href="#projects"
          >
            View selected work
          </a>
        </div>
        <div className="mt-7 flex flex-wrap gap-5.5">
          <a
            className={monoLink}
            href="https://github.com/dhruvimistry"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className={monoLink}
            href="https://www.linkedin.com/in/dhruvimistry03/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <aside
        className="mt-auto flex justify-between gap-5 border-t border-line py-4.5 font-mono text-[.7rem] font-medium uppercase tracking-[.06em] text-muted max-sm:flex-col max-sm:gap-2"
        aria-label="Technical focus"
      >
        <span>01 / production AI</span>
        <strong className="font-medium text-ink">
          RAG · agents · interfaces
        </strong>
      </aside>
    </section>
  );
}
export default Hero;
