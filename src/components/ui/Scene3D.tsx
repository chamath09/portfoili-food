import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

function FloatingMolecule({ position, color }: { position: [number, number, number], color: string }) {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
            meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <icosahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial color={color} transparent opacity={0.6} />
        </mesh>
    );
}

export function Scene3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <FloatingMolecule position={[-2, 1, 0]} color="#10b981" />
                <FloatingMolecule position={[2, -1, -1]} color="#14b8a6" />
                <FloatingMolecule position={[0, 2, -2]} color="#34d399" />
                <FloatingMolecule position={[-1, -2, 1]} color="#059669" />
            </Canvas>
        </div>
    );
}
