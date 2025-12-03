import { Canvas, useFrame } from '@react-three/fiber';
import { Image, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedImage({ url }: { url: string }) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            // Subtle breathing effect
            ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x, 1 + Math.sin(state.clock.elapsedTime) * 0.02, 0.1);
            ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, 1 + Math.sin(state.clock.elapsedTime) * 0.02, 0.1);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Image
                ref={ref}
                url={url}
                transparent
                opacity={1}
                scale={[3, 3]} // Adjust scale based on aspect ratio
                radius={0.1} // Rounded corners
            />
        </Float>
    );
}

export function Hero3DImage({ imageUrl }: { imageUrl: string }) {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={1} />
                <AnimatedImage url={imageUrl} />
            </Canvas>
        </div>
    );
}
