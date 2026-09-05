import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const GridPlane = ({ 
  linesColor = '#3a3a3a', 
  scanColor = '#D4AF37', 
  scanOpacity = 0.2, 
  gridScale = 0.1,
  scanDirection = 'pingpong',
  scanDuration = 4.0
}) => {
  const materialRef = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uLinesColor: { value: new THREE.Color(linesColor) },
      uScanColor: { value: new THREE.Color(scanColor) },
      uScanOpacity: { value: scanOpacity },
      uGridScale: { value: gridScale },
      uDuration: { value: scanDuration }
    }),
    [linesColor, scanColor, scanOpacity, gridScale, scanDuration]
  );

  const meshRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
    if (meshRef.current) {
      // Gentle mouse parallax tilt
      const targetX = (state.pointer.x * Math.PI) / 20;
      const targetY = (state.pointer.y * Math.PI) / 20;
      
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += (-Math.PI / 2.5 - targetY - meshRef.current.rotation.x) * 0.05;
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uLinesColor;
    uniform vec3 uScanColor;
    uniform float uScanOpacity;
    uniform float uGridScale;
    uniform float uDuration;
    
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      // Grid generation based on scale
      float scale = 1.0 / uGridScale;
      vec2 grid = abs(fract(vUv * scale - 0.5) - 0.5) / fwidth(vUv * scale);
      float line = min(grid.x, grid.y);
      float intensity = 1.0 - min(line, 1.0);
      
      // Pingpong scan effect
      float time = (uTime / uDuration) * 3.14159;
      float scanPos = sin(time) * 0.5 + 0.5; // pingpong from 0 to 1
      
      // distance from scan line
      float scanDist = abs(vUv.y - scanPos);
      float scan = pow(1.0 - min(scanDist * 5.0, 1.0), 4.0); // sharp beam
      
      // Final color mix
      vec3 color = uLinesColor * intensity + uScanColor * scan * uScanOpacity;
      
      // fade out at edges
      float dist = distance(vUv, vec2(0.5));
      float alpha = smoothstep(0.5, 0.0, dist) * ((intensity > 0.05 || scan > 0.05) ? 1.0 : 0.0);
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, -2]}>
      <planeGeometry args={[30, 30]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

const GridScan = ({
  linesColor = '#2a2a2a',
  scanColor = '#D4AF37',
  scanOpacity = 0.2,
  gridScale = 0.1,
  enablePost = true,
  bloomIntensity = 0.3,
  scanDirection = 'pingpong',
  scanDuration = 4.0,
  enableWebcam = false // Included for API compatibility but unused in this aesthetic mode
}) => {
  return (
    <div className="absolute inset-0 z-0 bg-navy-900 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
        <fog attach="fog" args={['#0a0a0a', 2, 10]} />
        <GridPlane 
          linesColor={linesColor}
          scanColor={scanColor}
          scanOpacity={scanOpacity}
          gridScale={gridScale}
          scanDirection={scanDirection}
          scanDuration={scanDuration}
        />
        {enablePost && (
          <EffectComposer>
            <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={bloomIntensity} />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
};

export default GridScan;
