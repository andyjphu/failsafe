import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { VideoDemo } from "@/components/video-demo";
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
        <VideoDemo />
        <InstallSection />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
