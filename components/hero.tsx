import { VscGithubAlt } from "react-icons/vsc";
import { RegistrationMarks } from "@/components/registration-marks";
import { FadeIn } from "@/components/fade-in";
import { GITHUB_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-6">
              FailSafe by PhT Labs
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-text">
              Contract testing for multi-agent AI systems
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="mt-6 text-lg text-text-muted">
              Validate handoffs, prevent data leakage, and enforce compliance
              policies — in milliseconds.
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="flex items-center gap-4 mt-10">
              <a
                href="#install"
                className="px-6 py-3 bg-text text-white text-sm font-medium hover:bg-gray-800 transition-colors no-underline"
              >
                Get Started
              </a>
              <a
                href={GITHUB_URL}
                className="px-6 py-3 border border-text text-text text-sm font-medium hover:bg-text hover:text-white transition-colors no-underline inline-flex items-center gap-2"
              >
                <VscGithubAlt size={16} />
                GitHub
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300} className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm md:max-w-none">
            <RegistrationMarks />

            <div
              className="relative z-10"
              style={{
                boxShadow: "0 0 40px 2px rgba(0,0,0,0.05), 0 0 4px 2px rgba(0,0,0,0.05)",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-square object-cover block"
              >
                <source src="/Code.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
