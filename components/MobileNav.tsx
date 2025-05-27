'use client'

import { useState, useEffect } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import { motion, AnimatePresence } from 'framer-motion'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  // 添加手势支持
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      const startX = touch.clientX
      
      const handleTouchEnd = (e: TouchEvent) => {
        const touch = e.changedTouches[0]
        const endX = touch.clientX
        const diff = endX - startX
        
        if (diff > 100 && navShow) {
          onToggleNav()
        }
      }
      
      document.addEventListener('touchend', handleTouchEnd, { once: true })
    }
    
    if (navShow) {
      document.addEventListener('touchstart', handleTouchStart)
    }
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
    }
  }, [navShow])

  return (
    <>
      <button 
        aria-label="Toggle Menu" 
        onClick={onToggleNav} 
        className="sm:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6 text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      <AnimatePresence>
        {navShow && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed left-0 top-0 z-10 h-full w-full transform bg-white/95 backdrop-blur-sm dark:bg-gray-950/95"
          >
            <div className="flex justify-end">
              <button 
                className="mr-8 mt-11 h-8 w-8 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" 
                aria-label="Toggle Menu" 
                onClick={onToggleNav}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-gray-900 dark:text-gray-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <nav className="fixed mt-8 h-full">
              {headerNavLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-12 py-4"
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNav
