import React from "react";
import { motion } from "framer-motion";

import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

import { MotionContainer } from "@/components";

interface Props {
  pageInfo: PageInfo;
}

const About = ({ pageInfo }: Props) => {
  return (
    <MotionContainer className="motion-container max-w-7xl text-center md:text-left">
      <h3 className="title">About</h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-56 h-56 flex-shrink-0 mt-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src={urlFor(pageInfo.profilePic).url()}
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/40">little</span>{" "}
          background
        </h4>
        <p>{pageInfo.backgroundInfomation}</p>
      </div>
    </MotionContainer>
  );
};

export default About;
