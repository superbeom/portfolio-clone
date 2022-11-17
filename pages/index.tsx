import Head from "next/head";

import {
  Header,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
} from "@/components";

export default function Home() {
  return (
    <div className="h-screen bg-[#363636] text-white snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
    </div>
  );
}
