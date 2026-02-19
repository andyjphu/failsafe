import { STEPS } from '../lib/constants'

export default function HowItWorks() {
  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16 text-text">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={i > 0 ? 'md:border-l md:border-border md:pl-12' : ''}
            >
              <span className="text-xs font-mono text-text-muted mb-4 block">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold tracking-tight mb-3 text-text">
                {step.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
