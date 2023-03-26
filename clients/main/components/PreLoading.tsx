'use client'
import React from 'react'
import { Triangle } from 'react-loader-spinner'

const PreLoading = () => {
  return (
    <section className="z-[999] bg-white fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center">
      <Triangle height="80" width="80" color="#51c19a" ariaLabel="triangle-loading" visible={true} />
    </section>
  )
}

export default PreLoading
