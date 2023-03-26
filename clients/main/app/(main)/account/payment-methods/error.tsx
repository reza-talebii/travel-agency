'use client'

import { Boundary } from '@/components/Boundary'
import ButtonUi from '@/components/UI/Button'
import React from 'react'

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log('logging error:', error)
  }, [error])

  return (
    <Boundary labels={['Home page Error UI']} color="pink">
      <div className="space-y-4">
        <div className="text-sm text-vercel-pink">
          <strong className="font-bold">Error:</strong> {error?.message}
        </div>
        <div>
          <ButtonUi onClick={() => reset()}>Try Again</ButtonUi>
        </div>
      </div>
    </Boundary>
  )
}
