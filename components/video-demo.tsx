export function VideoDemo() {
  return (
    <section className="border-t border-border px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-text-muted mb-8">Demo</p>
        <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
          <div className="aspect-video">
            <video
              className="w-full h-full"
              src="/YCDemoVideo.mp4"
              controls
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
