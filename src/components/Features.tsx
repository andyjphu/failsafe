import { FEATURES } from '../lib/constants'

export default function Features() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16 text-text">
          Built for production agent systems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="p-8 bg-white">
              <feature.icon size={28} className="text-text-muted mb-5" />
              <h3 className="text-lg font-semibold tracking-tight mb-2 text-text">
                {feature.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
