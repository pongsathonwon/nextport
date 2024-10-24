import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Hero from "@/components/hero/hero";
import Skill from "@/components/skill/skill";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto border-x border-neutral/10 mt-16">
      <Hero />
      <About />
      <Skill />
      <Contact />
    </main>
  );
}
