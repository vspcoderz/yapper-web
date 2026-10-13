import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import CtaBand from "@/app/components/sections/cta-band";
import Faq from "@/app/components/sections/faq";
import FeatureSplit from "@/app/components/sections/feature-split";
import Hero from "@/app/components/sections/hero";
import { SCREENSHOTS, SPLITS } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="px-5 sm:px-8">
        <Hero />

        {SPLITS.map((split, i) => (
          <FeatureSplit
            key={split.title}
            kicker={split.kicker}
            title={split.title}
            body={split.body}
            flip={split.flip}
            {...(i === 0 ? SCREENSHOTS.hero : SCREENSHOTS.dms)}
          />
        ))}

        <CtaBand />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
