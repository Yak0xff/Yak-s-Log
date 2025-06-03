'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`
            duration-700 ease-in-out
            ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
          `}
          onLoadingComplete={() => setIsLoading(false)}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      {isLoading && <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-800" />}
    </div>
  )
}

export default ResponsiveImage
