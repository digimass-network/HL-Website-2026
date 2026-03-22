import dynamic from "next/dynamic";
import { HeroCopy } from "./HeroCopy";

const HeroCanvas = dynamic(
  () => import("./HeroCanvas").then((m) => ({ default: m.HeroCanvas })),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-[min(52vw,420px)] min-h-[280px] w-full items-center justify-center rounded-2xl border border-cyan-500/15 bg-zinc-900/50 sm:h-[380px] lg:h-[min(42vw,480px)] lg:min-h-[380px]"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-3">
          <div className="h-9 w-9 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
          <span className="text-xs text-zinc-500">Loading visual</span>
        </div>
      </div>
    ),
  },
);

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-zinc-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(34,211,238,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <HeroCopy />
        <div className="relative flex w-full justify-center lg:justify-end">
          <div className="w-full max-w-xl lg:max-w-none">
            <HeroCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
