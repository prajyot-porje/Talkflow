"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { FaLocationArrow } from "react-icons/fa6";

export function LandingPage({

  setloadingPage,
}: {
  setloadingPage: React.Dispatch<React.SetStateAction<boolean>>; // Correct type for state updater
}) {
  const words = [
    {
      text: "connect",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "with",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "AI.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const turnOff = () => {
    // Update the parent state to hide LandingPage
    setloadingPage(true);
  };

  return (
    <HeroHighlight className="">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Welcome to{" "}
        <Highlight className="text-black dark:text-white">
          TalkFlow : AI Chatbot{" "}
        </Highlight>
        Where Conversations Come Alive Transform the way you
        <TypewriterEffect words={words} />
        <button className="p-[3px] h-12 w-48  relative" onClick={turnOff}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 text-base flex bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Get Started{" "}
            <FaLocationArrow size={18} className="ml-4 mt-[2px]" />
          </div>
        </button>
      </motion.h1>
    </HeroHighlight>
  );
}
