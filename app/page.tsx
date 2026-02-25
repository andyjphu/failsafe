import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { InstallSection } from "@/components/install-section";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InstallSection />
        <Features />
      </main>
      <Footer />
    </>
  );
}
