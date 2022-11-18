import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import {
  Experience as ExperienceType,
  PageInfo,
  Project,
  Skill,
  Social,
} from "@/typings";

import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";

import {
  Header,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  ContactMe,
} from "@/components";

interface Props {
  pageInfo: PageInfo;
  skills: Skill[];
  experiences: ExperienceType[];
  projects: Project[];
  socials: Social[];
}

const Home: NextPage<Props> = ({
  pageInfo,
  skills,
  experiences,
  projects,
  socials,
}) => {
  return (
    <div
      className="h-screen bg-[#363636] text-white custom-scrollbar
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0"
    >
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <Experience experiences={experiences} />
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
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const pageInfo = await fetchPageInfo();
  const skills = await fetchSkills();
  const experiences = await fetchExperiences();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      experiences,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
