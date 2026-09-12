function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto grid w-[min(1120px,calc(100%-40px))] grid-cols-[.95fr_1.05fr] items-start gap-[clamp(42px,9vw,110px)] py-24 max-md:w-[min(1120px,calc(100%-32px))] max-md:grid-cols-1 max-md:py-18"
    >
      <div>
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[.08em] text-signal">
          Contact / 04
        </p>
        <h2 className="mb-9 max-w-180 font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] font-semibold tracking-[-.045em]">
          Have an AI product worth making reliable?
        </h2>
        <p className="-mt-5.5 mb-6.5 max-w-110 leading-7 text-muted">
          I’m open to full-stack AI engineering opportunities and thoughtful
          product conversations.
        </p>
        <a
          className="inline-flex min-h-11.5 items-center justify-center rounded-lg border border-signal bg-signal px-4.5 font-bold text-canvas no-underline transition hover:-translate-y-0.5 hover:bg-signal-strong"
          href="mailto:dhruvimistry03@gmail.com"
        >
          Start a conversation →
        </a>
      </div>
      <form
        className="grid gap-4 rounded-2xl border border-line bg-panel p-6.5 shadow-panel max-sm:p-5.5"
        action="https://formspree.io/f/mnnnqanq"
        method="post"
      >
        <label className="grid gap-2 font-mono text-[.7rem] font-medium uppercase tracking-wider text-muted">
          Name
          <input
            className="w-full rounded-lg border border-line bg-canvas p-3 text-[.92rem] normal-case tracking-normal outline-none transition placeholder:text-muted focus:border-signal focus:ring-3 focus:ring-signal-soft"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </label>
        <label className="grid gap-2 font-mono text-[.7rem] font-medium uppercase tracking-wider text-muted">
          Email
          <input
            className="w-full rounded-lg border border-line bg-canvas p-3 text-[.92rem] normal-case tracking-normal outline-none transition placeholder:text-muted focus:border-signal focus:ring-3 focus:ring-signal-soft"
            type="email"
            name="email"
            placeholder="you@company.com"
            required
          />
        </label>
        <label className="grid gap-2 font-mono text-[.7rem] font-medium uppercase tracking-wider text-muted">
          Message
          <textarea
            className="min-h-29.5 w-full resize-y rounded-lg border border-line bg-canvas p-3 text-[.92rem] normal-case tracking-normal outline-none transition placeholder:text-muted focus:border-signal focus:ring-3 focus:ring-signal-soft"
            name="message"
            placeholder="What are you building?"
            required
          />
        </label>
        <input
          className="min-h-11.5 w-full cursor-pointer rounded-lg border border-signal bg-signal px-4.5 font-bold text-canvas transition hover:-translate-y-0.5 hover:bg-signal-strong"
          type="submit"
          value="Send message"
        />
      </form>
    </section>
  );
}
export default Contact;
