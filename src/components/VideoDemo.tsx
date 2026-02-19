import { HiOutlinePlay } from 'react-icons/hi2'

export default function VideoDemo() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video bg-code-bg border border-border flex flex-col items-center justify-center">
          <HiOutlinePlay size={48} className="text-text-muted" />
          <p className="text-sm text-text-muted mt-3">Demo coming soon</p>
        </div>
      </div>
    </section>
  )
}
