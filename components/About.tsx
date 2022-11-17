import React from "react";
import { motion } from "framer-motion";

import { MotionContainer } from "@/components";

const About = () => {
  return (
    <MotionContainer className="motion-container max-w-7xl text-center md:text-left">
      <h3 className="title">About</h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-56 h-56 flex-shrink-0 mt-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://res.cloudinary.com/ds8wavxll/image/upload/v1668665907/cat2_nmkrwg.jpg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/40">little</span>{" "}
          background
        </h4>
        <p>
          I&apos;m Mia. You might also known me as Mia! I&apos;ll be your coach
          & mentor inside the REACT, here&apos;s a little bit about me...
          I&apos;ve been coding for over 5 years now. As a Full Stack developer
          I&apos;ve worked both with startups and large corporations to help
          build & scale their companies. Along the journey I realised my passion
          existed in helping others excel and pursue their dreams as upcoming
          developers. With this passion, I have now trained thousand&apos;s of
          developers across the globe. Through live coaching sessions on
          Youtube. I have accumulated several MILLION views demonstraing how to
          apply developer skills in a range of cool builds and challenges. I
          deliver REAL VALUE by teaching REAL WORLD projects to help students
          enter the world of web development. You&apos;ll get hands-on
          experience and learn the skills that are required to succeed in the
          real-world in this community. And if that&apos;s not enough I have
          cloned most of the applications you have used in your life!
        </p>
      </div>
    </MotionContainer>
  );
};

export default About;
