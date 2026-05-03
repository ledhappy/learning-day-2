import { FeatureCards } from "@/components/feature-cards";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FeatureCards />
      </main>
      <SiteFooter />
    </>
  );
}
