"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const PHI = (1 + Math.sqrt(5)) / 2;

const ICO_VERTS: [number, number, number][] = [
  [-1, PHI, 0],
  [1, PHI, 0],
  [-1, -PHI, 0],
  [1, -PHI, 0],
  [0, -1, PHI],
  [0, 1, PHI],
  [0, -1, -PHI],
  [0, 1, -PHI],
  [PHI, 0, -1],
  [PHI, 0, 1],
  [-PHI, 0, -1],
  [-PHI, 0, 1],
];

function buildNetwork(radius: number) {
  const verts = ICO_VERTS.map(
    ([x, y, z]) => new THREE.Vector3(x, y, z).normalize().multiplyScalar(radius),
  );
  const edges: [number, number][] = [];
  const thresh = radius * 1.1;
  for (let i = 0; i < verts.length; i++) {
    for (let j = i + 1; j < verts.length; j++) {
      if (verts[i]!.distanceTo(verts[j]!) < thresh) {
        edges.push([i, j]);
      }
    }
  }
  const linePositions = new Float32Array(edges.length * 6);
  let o = 0;
  for (const [a, b] of edges) {
    const va = verts[a]!;
    const vb = verts[b]!;
    linePositions[o++] = va.x;
    linePositions[o++] = va.y;
    linePositions[o++] = va.z;
    linePositions[o++] = vb.x;
    linePositions[o++] = vb.y;
    linePositions[o++] = vb.z;
  }
  return { verts, linePositions };
}

export function DataConnectivityScene() {
  const root = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);

  const { verts, linePositions } = useMemo(() => buildNetwork(1.35), []);

  useFrame((_, dt) => {
    if (root.current) {
      root.current.rotation.y += dt * 0.22;
      root.current.rotation.x += dt * 0.06;
    }
    if (inner.current) {
      inner.current.rotation.y -= dt * 0.35;
      inner.current.rotation.z += dt * 0.12;
    }
  });

  const cyan = "#22d3ee";
  const cyanDeep = "#0891b2";

  return (
    <group>
      <ambientLight intensity={0.25} />
      <pointLight color={cyan} intensity={2.2} position={[3.5, 2.5, 4]} />
      <pointLight color={cyanDeep} intensity={1.1} position={[-4, -1.5, 2]} />
      <directionalLight color="#e0f2fe" intensity={0.35} position={[0, 4, 2]} />

      <group ref={root}>
        <lineSegments frustumCulled={false}>
          <bufferGeometry>
            <float32BufferAttribute
              attach="attributes-position"
              args={[linePositions, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={cyan}
            transparent
            opacity={0.55}
            depthWrite={false}
          />
        </lineSegments>

        {verts.map((v, i) => (
          <mesh key={i} position={v}>
            <sphereGeometry args={[0.065, 24, 24]} />
            <meshStandardMaterial
              color={cyan}
              emissive={cyan}
              emissiveIntensity={1.35}
              metalness={0.65}
              roughness={0.28}
            />
          </mesh>
        ))}

        <group ref={inner}>
          <mesh>
            <octahedronGeometry args={[0.42, 0]} />
            <meshStandardMaterial
              color={cyanDeep}
              emissive={cyan}
              emissiveIntensity={0.85}
              metalness={0.75}
              roughness={0.22}
              transparent
              opacity={0.92}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}
