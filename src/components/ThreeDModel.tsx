'use client'

import React, { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, PresentationControls } from '@react-three/drei'
import { Loader2 } from 'lucide-react'

interface ThreeDModelProps {
  modelPath: string
  title: string
  description: string
}



function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath)
  
  // Scale and position the model appropriately
  return (
    <primitive 
      object={scene} 
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
    />
  )
}

// Error boundary for model loading
function ModelWithErrorBoundary({ modelPath }: { modelPath: string }) {
  try {
    return <Model modelPath={modelPath} />
  } catch (error) {
    console.error('Error loading 3D model:', error)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center text-[#766B5A]">
          <p className="text-lg mb-2">عذراً، حدث خطأ في تحميل النموذج</p>
          <p className="text-sm">يرجى المحاولة مرة أخرى</p>
        </div>
      </div>
    )
  }
}

function LoadingPlaceholder() {
  return (
    <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-[#F8F6F2] to-[#F1EAE3] rounded-[2rem] flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-[#C49D2F] animate-spin mx-auto mb-4" />
        <p className="text-[#766B5A] text-lg font-light">جاري تحميل النموذج ثلاثي الأبعاد...</p>
      </div>
    </div>
  )
}

export default function ThreeDModel({ modelPath, title, description }: ThreeDModelProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const controlsRef = useRef<any>(null)

  // Set initial camera position when component mounts
  useEffect(() => {
    if (isLoaded && controlsRef.current) {
      // Small delay to ensure controls are ready
      setTimeout(() => {
        // Set initial camera position without auto-rotation
        if (controlsRef.current) {
          controlsRef.current.setAzimuthalAngle(-Math.PI / 4) // 45 degrees
          controlsRef.current.setPolarAngle(Math.PI / 3) // 60 degrees
          controlsRef.current.setDistance(5)
          controlsRef.current.update()
        }
      }, 100)
    }
  }, [isLoaded])

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
            {title}
          </h2>
          <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* 3D Model Container */}
        <div className="relative">
          {/* Model Canvas */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)] bg-gradient-to-br from-[#F8F6F2] to-[#F1EAE3]">
            <Canvas
              camera={{ position: [5, 3, 5], fov: 45 }}
              style={{ height: '500px', width: '100%' }}
              onCreated={() => setIsLoaded(true)}
              gl={{ 
                antialias: true, 
                alpha: true,
                powerPreference: "high-performance"
              }}
            >
              <Suspense fallback={null}>
                <ModelWithErrorBoundary modelPath={modelPath} />
                <Environment preset="sunset" />
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} />
                <pointLight position={[0, 5, 0]} intensity={0.8} />
                <PresentationControls
                  global
                  rotation={[0, -Math.PI / 4, 0]}
                  polar={[-Math.PI / 6, Math.PI / 3]}
                  azimuth={[-Math.PI / 3, Math.PI / 3]}
                >
                  <OrbitControls
                    ref={controlsRef}
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    minDistance={3}
                    maxDistance={15}
                    autoRotate={false}
                    dampingFactor={0.1}
                    enableDamping={true}
                  />
                </PresentationControls>
              </Suspense>
            </Canvas>
            {/* Loading Overlay */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                <LoadingPlaceholder />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 