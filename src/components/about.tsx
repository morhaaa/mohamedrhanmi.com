"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-lg">
        I am a highly skilled
        <span className="font-medium"> front-end developer</span>, with a solid
        foundation in HTML, CSS, and JavaScript. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB.
        </span>
        I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic text-lg"> Other than coding</span>, I spend my
        free time doing sports, cooking new dishes and eating Pizza.{" "}
      </p>
    </motion.section>
  );
}
