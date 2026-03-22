import Link from "next/link";
import { HeroSection } from "@/components/hero";

const pillars = [
  {
    title: "Liner & System Installs",
    description:
      "UL-listed stainless steel lining systems and high-performance heating vents engineered for lifetime safety.",
  },
  {
    title: "The CSR Advantage",
    description:
      "Stop guessing about your chimney's health. Access 3D inspection reports and project milestones through our secure data portal.",
  },
  {
    title: "Structural Masonry",
    description:
      "Master-level brickwork and historic restoration, ensuring your home's most critical infrastructure stands the test of time.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/75 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 sm:h-16">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white transition hover:text-cyan-300/90"
          >
            H&amp;L
          </Link>
          <Link
            href="/csr-portal"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-4 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-500/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            Login to Portal
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col pt-14 sm:pt-16">
        <HeroSection />

        <section
          className="relative border-t border-cyan-500/10 bg-zinc-950 px-6 py-20 sm:py-24"
          aria-labelledby="pillars-heading"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="pillars-heading"
              className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              The Pillars
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-white/10 border-t-4 border-t-cyan-400 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
