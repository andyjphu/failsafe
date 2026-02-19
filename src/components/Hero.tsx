import { VscGithubAlt } from 'react-icons/vsc'

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-6">
          FailSafe by PhT Labs
        </p>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight text-text">
          Contract testing for
          <br />
          multi-agent AI systems
        </h1>

        <p className="mt-6 text-lg text-text-muted max-w-xl mx-auto">
          Validate handoffs, prevent data leakage, and enforce compliance
          policies — in milliseconds.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <a
            href="#install"
            className="px-6 py-3 bg-text text-white text-sm font-medium hover:bg-gray-800 transition-colors no-underline"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-text text-text text-sm font-medium hover:bg-text hover:text-white transition-colors no-underline inline-flex items-center gap-2"
          >
            <VscGithubAlt size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
