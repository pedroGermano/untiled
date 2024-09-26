import { SectionCompanies } from "./components/SectionCompanies";
import { SectionHero } from "./components/SectionHero";
import { SectionFeatures } from "./components/SectionFeatures";
import { SectionTestimonials } from "./components/SectionTestimonials";
import { SectionAnalitycs } from "./components/SectionAnalitycs";
import { SectionQuestions } from "./components/SectionQuestions";
import { SectionLauch } from "./components/SectionLauch";
import { SectionTrial } from "./components/SectionTrial";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionAnalitycs />
      <SectionQuestions />
      <SectionLauch />
      <SectionTrial />
    </>
  );
}
