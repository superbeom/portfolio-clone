import React, { ReactNode } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

interface Motion {
  position: number;
  className: string;
  children: ReactNode;
}

const posistion = 500;
const initial = {
  opacity: 0,
  scale: 0.5,
};
const animate = {
  x: 0,
  opacity: 1,
  scale: 1,
};
const transition = { duration: 1.5 };

const socialIconStyle = {
  className: "cursor-pointer",
  fgColor: "gray",
  bgColor: "transparent",
};

const MotionDiv = ({ position, className, children }: Motion) => (
  <motion.div
    initial={{
      ...initial,
      x: position,
    }}
    animate={animate}
    transition={transition}
    className={className}
  >
    {children}
  </motion.div>
);

const Header = () => {
  return (
    <header className="sticky top-0 flex justify-between items-start xl:items-center max-w-7xl p-5 md:mx-auto z-20">
      <MotionDiv position={-posistion} className="flex items-center">
        <SocialIcon network="facebook" {...socialIconStyle} />
        <SocialIcon network="youtube" {...socialIconStyle} />
        <SocialIcon network="instagram" {...socialIconStyle} />
        <SocialIcon network="twitter" {...socialIconStyle} />
      </MotionDiv>

      <MotionDiv
        position={posistion}
        className="flex items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon network="email" {...socialIconStyle} />
        <p className="uppercase hidden md:inline-flex text-sm font-semibold text-gray-400">
          Get In Touch
        </p>
      </MotionDiv>
    </header>
  );
};

export default Header;
