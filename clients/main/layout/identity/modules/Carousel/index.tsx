import { Carousel } from 'antd'
import Image from 'next/image'
import React from 'react'
import { CarouselIdentityWarper } from './styles'

const CarouselIdentity = () => {
  return (
    <CarouselIdentityWarper>
      <Carousel autoplay>
        <Image width={100} height={200} src={'/assets/images/identity/rectangle1.svg'} alt="Carousel" />
        <Image width={100} height={200} src={'/assets/images/identity/rectangle2.svg'} alt="Carousel" />
      </Carousel>
    </CarouselIdentityWarper>
  )
}

export default CarouselIdentity
