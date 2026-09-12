import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Qualifications from "./sections/Qualifications/Qualifications";
import Skills from "./sections/Skills/Skills";
function App() {
  return (
    <main className="relative overflow-hidden before:pointer-events-none before:fixed before:inset-0 before:-z-10 before:opacity-45 before:bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] before:bg-size-[72px_72px] before:mask-[linear-gradient(to_bottom,black,transparent_48%)]">
      <Hero />
      <Qualifications />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
export default App;
