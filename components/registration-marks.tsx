const ARMS = [
  // top-left: arms go up and left
  { className: "bottom-full left-0 w-px", style: { height: 68, background: "linear-gradient(to bottom, transparent, var(--color-border))" } },
  { className: "top-0 right-full h-px", style: { width: 54, background: "linear-gradient(to right, transparent, var(--color-border))" } },
  // top-right: arms go up and right
  { className: "bottom-full right-0 w-px", style: { height: 49, background: "linear-gradient(to bottom, transparent, var(--color-border))" } },
  { className: "top-0 left-full h-px", style: { width: 62, background: "linear-gradient(to left, transparent, var(--color-border))" } },
  // bottom-left: arms go down and left
  { className: "top-full left-0 w-px", style: { height: 56, background: "linear-gradient(to top, transparent, var(--color-border))" } },
  { className: "bottom-0 right-full h-px", style: { width: 71, background: "linear-gradient(to right, transparent, var(--color-border))" } },
  // bottom-right: arms go down and right
  { className: "top-full right-0 w-px", style: { height: 64, background: "linear-gradient(to top, transparent, var(--color-border))" } },
  { className: "bottom-0 left-full h-px", style: { width: 51, background: "linear-gradient(to left, transparent, var(--color-border))" } },
];

export function RegistrationMarks() {
  return (
    <>
      {ARMS.map((arm, i) => (
        <div key={i} className={`absolute ${arm.className}`} style={arm.style} />
      ))}
    </>
  );
}
