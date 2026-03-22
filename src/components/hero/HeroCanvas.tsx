"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { DataConnectivityScene } from "./DataConnectivityScene";

function CanvasFallback() {
  return (
    <div
      className="flex h-full min-h-[280px] w-full items-center justify-center rounded-2xl border border-cyan-500/20 bg-zinc-900/40 lg:min-h-[380px]"
      aria-hidden
    >
      <div className="h-10 w-10 animate-pulse rounded-full bg-cyan-500/30" />
    </div>
  );
}

export function HeroCanvas() {
  return (
    <div className="relative h-[min(52vw,420px)] w-full min-h-[280px] sm:h-[380px] lg:h-[min(42vw,480px)] lg:min-h-[380px]">
      <div
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.14),transparent_65%)] blur-2xl"
        aria-hidden
      />
      <Suspense fallback={<CanvasFallback />}>
        <Canvas
          className="!h-full !w-full rounded-2xl"
          camera={{ position: [0, 0, 4.8], fov: 42 }}
          dpr={[1, 2]}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
        >
          <DataConnectivityScene />
        </Canvas>
      </Suspense>
    </div>
  );
}
