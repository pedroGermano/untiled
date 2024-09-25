import { GridContainer } from "../GridContainer";
import { TagFeature } from "./TagFeature";

export function SectionHero() {
  return (
    <section className="pt-24">
      <GridContainer>
        <div className="text-center">
          <TagFeature />
          <h1 className="text-6xl font-semibold text-gray-900">
            Beautiful analytics to grow smarter
          </h1>
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
      </GridContainer>
    </section>
  );
}
