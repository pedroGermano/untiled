import { Header } from "./components/Header";
import { SectionCompanies } from "./components/SectionCompanies";
import { SectionHero } from "./components/SectionHero";
import { SectionFeatures } from "./components/SectionFeatures";
import { SectionTestimonials } from "./components/SectionTestimonials";
import { SectionAnalitycs } from "./components/SectionAnalitycs";
import { SectionQuestions } from "./components/SectionQuestions";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionAnalitycs />
      <SectionQuestions />
    </>
  );
}
