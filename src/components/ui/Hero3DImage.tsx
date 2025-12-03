import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Float } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function AnimatedCircle({ url }: { url: string }) {
    const texture = useTexture(url);
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            // Subtle breathing effect
            ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.02);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh ref={ref}>
                <circleGeometry args={[2.2, 64]} />
                <meshBasicMaterial map={texture} toneMapped={false} />
            </mesh>
        </Float>
    );
}

export function Hero3DImage({ imageUrl }: { imageUrl: string }) {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={1.2} />
                <Suspense fallback={null}>
                    <AnimatedCircle url={imageUrl} />
                </Suspense>
            </Canvas>
        </div>
    );
}
