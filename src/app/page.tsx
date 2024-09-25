import { Header } from "./components/Header";
import { SectionCompanies } from "./components/SectionCompanies";
import { SectionHero } from "./components/SectionHero";
import { SectionFeatures } from "./components/SectionFeatures";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
    </>
  );
}
