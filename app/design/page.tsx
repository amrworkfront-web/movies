"use client";

export default function DesignSystemPreview() {
  return (
    <div className="p-8 space-y-12 bg-background text-foreground">
      {/* ================= COLORS ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🎨 Colors</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorBox title="surface" className="bg-surface" />
          <ColorBox title="surface-low" className="bg-surface-low" />
          <ColorBox title="surface-high" className="bg-surface-high" />
          <ColorBox title="surface-highest" className="bg-surface-highest" />
          <ColorBox title="primary" className="bg-primary" />
          <ColorBox title="primary-container" className="bg-primary-container" />
          <ColorBox title="secondary" className="bg-secondary" />
          <ColorBox title="surface-variant" className="bg-surface-variant backdrop-blur-xl" />
        </div>
      </section>

      {/* ================= TYPOGRAPHY ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">✍️ Typography</h2>

        <h1 className="text-6xl font-bold tracking-[-0.02em]">
          Display Title
        </h1>

        <h2 className="text-3xl font-bold">Headline</h2>

        <p className="text-secondary max-w-xl">
          This is body text using the cinematic editorial system. It should feel
          soft, readable, and premium — not harsh white.
        </p>

        <span className="uppercase tracking-[0.1em] text-xs text-secondary">
          4K UHD • 2H 30M
        </span>
      </section>

      {/* ================= BUTTONS ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🔘 Buttons</h2>

        <div className="flex flex-wrap gap-4">
          <button className="bg-primary-container text-white px-6 py-3 rounded-xl">
            Primary
          </button>

          <button className="border border-outline text-secondary px-6 py-3 rounded-xl hover:bg-surface-high transition">
            Ghost
          </button>

          <button className="bg-surface-variant backdrop-blur-xl px-6 py-3 rounded-xl">
            Glass
          </button>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🎬 Cards</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-surface-high rounded-xl p-4 hover:scale-105 transition">
            <p>Default Card</p>
          </div>

          <div className="bg-surface-highest rounded-xl p-4 shadow-ambient">
            <p>Elevated Card</p>
          </div>

          <div className="bg-surface-low rounded-xl p-4">
            <p>Low Surface</p>
          </div>
        </div>
      </section>

      {/* ================= GLASS ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🧊 Glass Effect</h2>

        <div className="bg-surface-variant backdrop-blur-xl p-6 rounded-xl">
          Glass container (Navbar / Overlay style)
        </div>
      </section>

      {/* ================= CHIPS ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🏷 Chips</h2>

        <div className="flex gap-2 flex-wrap">
          <span className="bg-surface-high px-3 py-1 rounded-full text-xs text-secondary">
            Action
          </span>
          <span className="bg-surface-high px-3 py-1 rounded-full text-xs text-secondary">
            Drama
          </span>
          <span className="bg-surface-high px-3 py-1 rounded-full text-xs text-secondary">
            2024
          </span>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENT ================= */
function ColorBox({
  title,
  className,
}: {
  title: string;
  className: string;
}) {
  return (
    <div className="space-y-2">
      <div className={`h-20 rounded-xl ${className}`} />
      <p className="text-sm text-secondary">{title}</p>
    </div>
  );
}