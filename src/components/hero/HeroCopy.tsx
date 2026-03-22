import Link from "next/link";

export function HeroCopy() {
  return (
    <div className="flex flex-col justify-center gap-8 text-center lg:text-left">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400/90">
          Chimney service &amp; installation
        </p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Precision Chimney Engineering &amp; Installation
        </h1>
        <p className="mx-auto max-w-xl text-pretty text-lg leading-relaxed text-zinc-400 lg:mx-0">
          The region&apos;s most advanced chimney service. Professional masonry,
          liner installations, and structural repairs—backed by real-time data
          transparency.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
        <Link
          href="/csr-portal"
          className="group relative inline-flex h-12 min-w-[220px] items-center justify-center overflow-hidden rounded-lg bg-cyan-500 px-8 text-sm font-semibold text-zinc-950 shadow-[0_0_32px_-4px_rgba(34,211,238,0.55)] transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
          <span className="relative z-10">Access CSR Portal</span>
          <span
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition group-hover:translate-x-full duration-700"
            aria-hidden
          />
        </Link>
        <p className="max-w-xs text-xs text-zinc-500 sm:max-w-none">
          Secure access for customers and partners. Need help? Contact your H&amp;L
          representative.
        </p>
      </div>
    </div>
  );
}
