import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { InstallSection } from "@/components/install-section";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InstallSection />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
