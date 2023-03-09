import styled from 'styled-components'
import { IPropsImageUiKit } from '../interfaces/IProps'

type IPropsStyled = Pick<IPropsImageUiKit, 'height' | 'width'>

export const ImageUiKitContainer = styled.section<IPropsStyled>`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`
