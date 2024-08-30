import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { HeroSection } from "@/components/_HomeComponents/HeroSection";
import { Welcome } from "@/components/_HomeComponents/WelcomeSection";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <HeroSection/>
      <Welcome/>
    </section>
  );
}
