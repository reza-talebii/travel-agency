'use client'
import React from 'react'
import { Triangle } from 'react-loader-spinner'

const PreLoading = () => {
  return <Triangle height="80" width="80" color="#51c19a" ariaLabel="triangle-loading" visible={true} />
}

export default PreLoading
