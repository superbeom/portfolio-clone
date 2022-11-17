import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { BackgroundCircles } from "@/components";

const Hero = () => {
  const [text, _] = useTypewriter({
    words: [
      "Hi, The Name's Mia",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        className="relative w-32 h-32 mx-auto rounded-full object-fill"
        src="https://res.cloudinary.com/ds8wavxll/image/upload/v1668663157/samples/animals/kitten-playing.gif"
        alt="profile"
        width={128}
        height={128}
      />

      <div className="z-20">
        <h2 className="text-sm text-gray-500 uppercase pb-2 tracking-[15px]">
          Software Engineer
        </h2>

        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>

          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
