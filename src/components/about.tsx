"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useLanguage } from "@/containers/language-context";
import { useSectionInView } from "@/lib/useInView";

export default function About() {
  const { ref } = useSectionInView("#about");
  const { languageStrings } = useLanguage();

  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <SectionHeading>{languageStrings.about.title}</SectionHeading>
      <p className="mb-3 text-xl">
        {languageStrings.about.im}{" "}
        <span className="font-medium">{languageStrings.about.job}</span>,{" "}
        {languageStrings.about.description}{" "}
        <span className="font-medium">{languageStrings.about.stacks}. </span>
        {/* {languageStrings.about.otherStacks}. */}
      </p>

      <p className="text-xl">
        <span className="italic">{languageStrings.about.otherPassion}</span>
        {/*languageStrings.about.conclusion*/}
      </p>
    </motion.section>
  );
}
