import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-28 sm:pt-36 px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
