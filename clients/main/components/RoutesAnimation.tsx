'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import React, { FC, ReactNode } from 'react'

const RoutesAnimation: FC<{ children: ReactNode }> = ({ children }) => {
  const path = usePathname()

  return (
    <>
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
