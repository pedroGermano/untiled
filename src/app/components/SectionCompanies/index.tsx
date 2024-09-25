import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function SectionCompanies() {
  return (
    <section className="py-24">
      <GridContainer>
        <p>Join 4,000+ companies already growing</p>
        <div>
          <Image src="/layers.svg" width={146} height={48} alt="Layers" />
          <Image src="/sisyphus.svg" width={169} height={48} alt="Layers" />
          <Image src="/circooles.svg" width={183} height={44} alt="Layers" />
          <Image src="/catalog.svg" width={160} height={48} alt="Layers" />
          <Image src="/quotient.svg" width={187} height={44} alt="Layers" />
        </div>
      </GridContainer>
    </section>
  );
}
