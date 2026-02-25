import { FEATURES } from "@/lib/constants";

const ARM_LENGTHS = [68, 49, 54, 62, 56, 71, 51, 64, 44, 58, 46, 52];

function GridMarks() {
  // Intersection points for a 3-col x 2-row grid
  const cols = [0, 33.333, 66.667, 100];
  const rows = [0, 50, 100];
  let armIdx = 0;

  const marks: React.ReactNode[] = [];

  rows.forEach((y) => {
    cols.forEach((x) => {
      const isTop = y === 0;
      const isBottom = y === 100;
      const isLeft = x === 0;
      const isRight = x === 100;

      // Arm going up — only at top edge (extends outside) or interior (along grid line)
      if (isTop || (!isTop && !isBottom)) {
        const len = ARM_LENGTHS[armIdx++ % ARM_LENGTHS.length];
        marks.push(
          <div
            key={`v-up-${x}-${y}`}
            className="absolute w-px hidden lg:block"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              height: len,
              transform: "translateX(-50%) translateY(-100%)",
              background: "linear-gradient(to bottom, transparent, var(--color-border))",
            }}
          />
        );
      }
      // Arm going down — only at bottom edge (extends outside) or interior
      if (isBottom || (!isTop && !isBottom)) {
        const len = ARM_LENGTHS[armIdx++ % ARM_LENGTHS.length];
        marks.push(
          <div
            key={`v-down-${x}-${y}`}
            className="absolute w-px hidden lg:block"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              height: len,
              transform: "translateX(-50%)",
              background: "linear-gradient(to top, transparent, var(--color-border))",
            }}
          />
        );
      }
      // Arm going left — only at left edge (extends outside) or interior
      if (isLeft || (!isLeft && !isRight)) {
        const len = ARM_LENGTHS[armIdx++ % ARM_LENGTHS.length];
        marks.push(
          <div
            key={`h-left-${x}-${y}`}
            className="absolute h-px hidden lg:block"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: len,
              transform: "translateY(-50%) translateX(-100%)",
              background: "linear-gradient(to right, transparent, var(--color-border))",
            }}
          />
        );
      }
      // Arm going right — only at right edge (extends outside) or interior
      if (isRight || (!isLeft && !isRight)) {
        const len = ARM_LENGTHS[armIdx++ % ARM_LENGTHS.length];
        marks.push(
          <div
            key={`h-right-${x}-${y}`}
            className="absolute h-px hidden lg:block"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: len,
              transform: "translateY(-50%)",
              background: "linear-gradient(to left, transparent, var(--color-border))",
            }}
          />
        );
      }
    });
  });

  return <>{marks}</>;
}

export function Features() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16 text-text">
          Built for production agent systems
        </h2>

        <div className="relative">
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
          <GridMarks />
        </div>
      </div>
    </section>
  );
}
