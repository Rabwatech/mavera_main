'use client'

import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PresentationControls, Box, Sphere, Cylinder } from '@react-three/drei'
import { Loader2, Eye, RotateCcw, ZoomIn } from 'lucide-react'

interface ThreeDModelProps {
  title: string
  description: string
}

function SimpleHallModel() {
  return (
    <group>
      {/* Main Hall Structure */}
      <Box args={[8, 3, 6]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#F8F6F2" />
      </Box>
      
      {/* Roof */}
      <Box args={[8.5, 0.3, 6.5]} position={[0, 3.15, 0]}>
        <meshStandardMaterial color="#C49D2F" />
      </Box>
      
      {/* Entrance */}
      <Box args={[2, 2.5, 0.2]} position={[0, 1.25, 3]}>
        <meshStandardMaterial color="#2D2926" />
      </Box>
      
      {/* Windows */}
      <Box args={[1.5, 1.5, 0.1]} position={[-2.5, 1.5, 3]}>
        <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} />
      </Box>
      <Box args={[1.5, 1.5, 0.1]} position={[2.5, 1.5, 3]}>
        <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} />
      </Box>
      
      {/* Chandeliers */}
      <Sphere args={[0.3, 16, 16]} position={[0, 2.5, 0]}>
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere args={[0.2, 16, 16]} position={[-2, 2.5, 0]}>
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere args={[0.2, 16, 16]} position={[2, 2.5, 0]}>
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.3} />
      </Sphere>
      
      {/* Tables */}
      <Cylinder args={[0.8, 0.8, 0.1, 8]} position={[0, 0.05, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
      <Cylinder args={[0.8, 0.8, 0.1, 8]} position={[-2, 0.05, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
      <Cylinder args={[0.8, 0.8, 0.1, 8]} position={[2, 0.05, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
      
      {/* Floor */}
      <Box args={[10, 0.1, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#D2B48C" />
      </Box>
    </group>
  )
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

export default function ThreeDModel({ title, description }: ThreeDModelProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showControls, setShowControls] = useState(false)

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
              camera={{ position: [8, 5, 8], fov: 50 }}
              style={{ height: '500px', width: '100%' }}
              onCreated={() => setIsLoaded(true)}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[0, 5, 0]} intensity={0.5} />
                
                <SimpleHallModel />
                
                <PresentationControls
                  global
                  rotation={[0, -Math.PI / 4, 0]}
                  polar={[-Math.PI / 4, Math.PI / 4]}
                  azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                  <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    minDistance={5}
                    maxDistance={20}
                    autoRotate={false}
                    autoRotateSpeed={0.5}
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

            {/* Interactive Controls Overlay */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <button
                onClick={() => setShowControls(!showControls)}
                className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
                title="إظهار/إخفاء أدوات التحكم"
              >
                <Eye className="w-5 h-5 text-[#2D2926]" />
              </button>
            </div>

            {/* Controls Panel */}
            {showControls && (
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-sm text-[#2D2926] font-medium mb-3">أدوات التحكم:</div>
                <div className="space-y-2 text-xs text-[#766B5A]">
                  <div className="flex items-center space-x-2">
                    <RotateCcw className="w-4 h-4" />
                    <span>اسحب للدوران</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ZoomIn className="w-4 h-4" />
                    <span>تكبير/تصغير</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>تحريك الكاميرا</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-6 text-center">
            <p className="text-[#766B5A] text-sm font-light">
              استخدم الماوس أو اللمس للتفاعل مع النموذج ثلاثي الأبعاد
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 