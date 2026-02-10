import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CodeExample } from "@/components/code-example";
import { DashboardPreview } from "@/components/dashboard-preview";
import { WhyNow } from "@/components/why-now";
import { Founders } from "@/components/founders";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <CodeExample />
      <DashboardPreview />
      <WhyNow />
      <Founders />
      <CTA />
      <Footer />
    </main>
  );
}
