import InputMask from 'react-input-mask'
import Image from 'next/image'
import React, { ChangeEvent, FC } from 'react'
import { CardNumberInputStyled } from './styled'

interface IProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error: boolean
  logo: string
  onFocus: () => void
}

const CardNumberInput: FC<IProps> = ({ onChange, error, logo }) => {
  return (
    <CardNumberInputStyled hasError={error}>
      <span className="label">شماره کارت</span>
      <InputMask
        placeholder="مثلا 6104221547868796"
        mask="9999-9999-9999-9999"
        alwaysShowMask={false}
        onChange={e => onChange(e)}
        name="cardNumber"
      />

      {logo && (
        <div className="bankLogo">
          <Image src={logo} alt="bankInfo" width={32} height={32} />
        </div>
      )}
    </CardNumberInputStyled>
  )
}

export default CardNumberInput
