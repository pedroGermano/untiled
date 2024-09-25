import { Header } from "./components/Header";
import { SectionCompanies } from "./components/SectionCompanies";
import { SectionHero } from "./components/SectionHero";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCompanies />
    </>
  );
}
