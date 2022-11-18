import React from "react";

import { Experience } from "@/typings";
import { MotionContainer, ExperienceCard } from "@/components";

interface Props {
  experiences: Experience[];
}

const Experience = ({ experiences }: Props) => {
  return (
    <MotionContainer className="motion-container max-w-full text-left overflow-hidden">
      <h3 className="title">Experience</h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10
      snap-x snap-mandatory mt-32 custom-scrollbar"
      >
        <ExperienceCard experience={experiences[0]} />
        <ExperienceCard experience={experiences[0]} />
        <ExperienceCard experience={experiences[0]} />
        <ExperienceCard experience={experiences[0]} />
      </div>
    </MotionContainer>
  );
};

export default Experience;
