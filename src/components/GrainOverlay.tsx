// A near-invisible noise texture over the whole page — the kind of detail
// that separates a flat digital surface from something that feels printed
// and considered. Pure decoration: no pointer events, no layout impact.
export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[70] pointer-events-none opacity-[0.035] mix-blend-overlay"
    >
      <svg width="100%" height="100%">
        <filter id="grainFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainFilter)" />
      </svg>
    </div>
  );
}
