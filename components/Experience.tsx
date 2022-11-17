import React from "react";

import { MotionContainer, ExperienceCard } from "@/components";

const Experience = () => {
  return (
    <MotionContainer className="motion-container max-w-full text-left overflow-hidden">
      <h3 className="title">Experience</h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10
      snap-x snap-mandatory mt-32"
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </MotionContainer>
  );
};

export default Experience;
