'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import React, { FC, ReactNode } from 'react'
import NextNProgress from 'nextjs-progressbar'

const RoutesAnimation: FC<{ children: ReactNode }> = ({ children }) => {
  const path = usePathname()

  return (
    <>
      <NextNProgress color="#36a77f" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <motion.div
        key={path}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        transition={{ duration: 0.2 }}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            filter: `invert()`,
            opacity: 0,
          },
        }}
      >
        {children}
      </motion.div>
    </>
  )
}

export default RoutesAnimation
