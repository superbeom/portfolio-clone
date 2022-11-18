import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import {
  Header,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  ContactMe,
} from "@/components";

export default function Home() {
  return (
    <div
      className="h-screen bg-[#363636] text-white custom-scrollbar
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0"
    >
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

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex-center">
            <Image
              className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://res.cloudinary.com/ds8wavxll/image/upload/v1668665907/cat2_nmkrwg.jpg"
              alt=""
              width={40}
              height={40}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
