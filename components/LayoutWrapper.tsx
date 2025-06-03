import { Inter } from 'next/font/google'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'
import { motion } from 'framer-motion'
import ScrollProgress from './ScrollProgress'

interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <ScrollProgress />
      <div className={`${inter.className} flex min-h-screen flex-col justify-between font-sans`}>
        <Header />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-7xl flex-grow px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
