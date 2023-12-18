"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";
import { useLanguage } from "@/containers/language-context";

export default function Projects() {
  const { ref } = useSectionInView("#projects", 0.1);

  const { activeLanguage } = useLanguage();

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        {activeLanguage === "It" ? "I miei lavori" : "My works"}
      </SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
}
