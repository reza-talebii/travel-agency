import Image from 'next/image'
import React, { FC } from 'react'
import { ImageUiKitContainer } from './styles'
import { IPropsImageUiKit } from './interfaces/IProps'

const ImageUi: FC<IPropsImageUiKit> = ({ height, width, className, ...props }) => {
  return (
    <ImageUiKitContainer className={className} height={height} width={width}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} fill className="object-cover" />
    </ImageUiKitContainer>
  )
}

export default ImageUi
