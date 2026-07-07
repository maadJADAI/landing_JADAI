"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";

/* Nodo 3D (docs/05·C): icosaedro de nodos cian + wireframe, R3F.
   Gira solo, parallax con el puntero; pausa fuera de viewport.
   El padre decide no montarlo en reduced-motion / sin WebGL. */
function NodeMesh({
  wireColor,
  pointColor,
}: {
  wireColor: string;
  pointColor: string;
}) {
  const group = useRef<THREE.Group>(null);
  const spin = useRef(0);
  const cur = useRef({ x: 0, y: 0 });

  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.18, 1), []);
  const wire = useMemo(() => new THREE.WireframeGeometry(geo), [geo]);

  useFrame((state, delta) => {
    spin.current += delta * 0.19;
    const tx = state.pointer.y * -0.35;
    const ty = state.pointer.x * 0.65;
    cur.current.x += (tx - cur.current.x) * 0.06;
    cur.current.y += (ty - cur.current.y) * 0.06;
    if (group.current) {
      group.current.rotation.x = cur.current.x;
      group.current.rotation.y = spin.current + cur.current.y;
    }
  });

  return (
    <group ref={group}>
      <lineSegments geometry={wire}>
        <lineBasicMaterial color={wireColor} transparent opacity={0.24} />
      </lineSegments>
      <points geometry={geo}>
        <pointsMaterial color={pointColor} size={0.075} />
      </points>
    </group>
  );
}

export default function Node3D({
  className,
  wireColor = "#F4F2EC",
  pointColor = "#22CCE6",
}: {
  className?: string;
  wireColor?: string;
  pointColor?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.05, false);
  // en táctil, bajar el techo de dpr: a 2x el canvas cuesta scroll fluido.
  // Este componente es ssr:false, así que matchMedia existe al montar.
  const [maxDpr] = useState(() =>
    typeof matchMedia !== "undefined" &&
    matchMedia("(pointer: coarse)").matches
      ? 1.5
      : 2,
  );
  return (
    <div ref={ref} className={cn("h-full w-full", className)} aria-hidden="true">
      <Canvas
        frameloop={inView ? "always" : "never"}
        dpr={[1, maxDpr]}
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <NodeMesh wireColor={wireColor} pointColor={pointColor} />
      </Canvas>
    </div>
  );
}
