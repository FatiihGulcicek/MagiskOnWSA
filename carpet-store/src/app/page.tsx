import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { MarqueeBar } from "@/components/sections/MarqueeBar";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { CraftProcess } from "@/components/sections/CraftProcess";
import { RegionalMap } from "@/components/sections/RegionalMap";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramGrid } from "@/components/sections/InstagramGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBar />
        <TrustBadges />
        <FeaturedCollection />
        <CraftProcess />
        <RegionalMap />
        <Testimonials />
        <InstagramGrid />
      </main>
      <Footer />
    </>
  );
}
