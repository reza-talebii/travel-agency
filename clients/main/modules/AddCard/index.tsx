'use client'

import ButtonUi from '@/components/UI/Button'
import CheckboxUi from '@/components/UI/Checkbox'
import FormUi from '@/components/UI/Form'
import InputUi from '@/components/UI/Input'
import InputMuskUi from '@/components/UI/InputMask'
import { ibanRegex } from '@/constants'
import { getBankName } from '@/helper'
import { validateCard } from '@/helper/bank/validateBankcard'
import { ROUTES } from '@/models'
import { BankService } from '@/services/controllers/Bank/Bank.service'
import { IBodyAddCard } from '@/services/controllers/Bank/models'
import { LeftOutlined } from '@ant-design/icons'
import { useMutation } from '@tanstack/react-query'
import { Form, message, Space, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import CardNumberInput from './components/cardNumberInput'
import { WrapperAddCard } from './styles'

const AddCard = () => {
  const [accountInfo, setAccountInfo] = useState<{ cardNumber: string; iban: string }>({ cardNumber: '', iban: '' })
  const [errors, setErrors] = useState<{ [key: string]: { error: boolean; message: string } }>({
    cardNumber: { error: false, message: '' },
    iban: { error: false, message: '' },
  })
  const [bankInfo, setBankInfo] = useState<{ bankName: string; logo: string }>({
    bankName: '',
    logo: '',
  })
  const router = useRouter()
  const services = new BankService()

  const addCardReq = async (body: IBodyAddCard) => {
    const res = await services.addCard(body)
    return res.data
  }

  const { isLoading, mutate } = useMutation(addCardReq, {
    onSuccess: () => {
      router.push(ROUTES.account)
    },
  })

  const onAdd = (values: { cardNumber: number; iban: string }) => mutate(values)

  const isValid = (name: string, value: string) => {
    const error = {
      [name]: {
        error: !value ? false : name === 'cardNumber' ? !validateCard(value) : !ibanRegex.test(value),
        message: !value ? '' : name === 'iban' ? 'شماره شبا معتبر نمی باشد.' : 'شماره کارت معتبر نمی باشد.',
      },
    }
    setErrors(perv => ({ ...perv, ...error }))
    return !error.cardNumber?.error && !error.iban?.error
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value.replaceAll('-', '').replaceAll('_', '')
    isValid(name, value)
    setAccountInfo(perv => ({ ...perv, [name]: value }))
  }

  const checkBankName = (ibn: string) => {
    setBankInfo(getBankName(ibn))
  }

  const cardChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(e)

    const realValue = e.target.value.replaceAll('-', '').replaceAll('_', '')
    if (realValue.length < 6) {
      setBankInfo({ bankName: '', logo: '' })
    }
    if (realValue.length >= 6) {
      checkBankName(realValue.substring(0, 6))
    }
  }

  return (
    <WrapperAddCard>
      <Space className="back" size={5}>
        <LeftOutlined />
        <span>back</span>
      </Space>
      <section>
        <Typography.Title level={3} className="title">
          Add a payment method
        </Typography.Title>
        <Typography.Text className="subTitle">Let’s get you all st up so you can access your personal account.</Typography.Text>
      </section>

      <FormUi onFinish={onAdd} className="flex flex-col gap-2">
        <Form.Item name={'cardNumber'} rules={[{ required: true }]}>
          <CardNumberInput
            onChange={e => {
              cardChangeHandler(e)
              if (!e.target.value.replaceAll('-', '').replaceAll('_', '')) {
                setErrors(perv => ({ ...perv, cardNumber: { error: true, message: 'لطفا شماره کارت را وارد کنید.' } }))
              }
            }}
            error={errors.cardNumber?.error}
            logo={bankInfo.logo}
            onFocus={() => {
              if (accountInfo.cardNumber) return
              setErrors(perv => ({ ...perv, cardNumber: { error: true, message: 'لطفا شماره کارت را وارد کنید.' } }))
            }}
          />
        </Form.Item>
        <Form.Item name={'iban'} rules={[{ required: true }]}>
          <InputMuskUi
            placeholder="IR690120010000004368250796 مثلا"
            mask="IR99-9999-9999-9999-9999-9999-99"
            alwaysShowMask={false}
            name="iban"
            onChange={onChangeHandler}
            haserror={errors.iban?.error}
            label="شماره شبا"
          />
        </Form.Item>

        <Form.Item noStyle name={'TermsPrivacy'} valuePropName="checked">
          <CheckboxUi>Securely save my information for 1-click checkout</CheckboxUi>
        </Form.Item>

        <ButtonUi loading={isLoading} htmlType="submit" className="w-full h-[48px]">
          Add payment method
        </ButtonUi>

        <Typography.Text className="text-center mt-1 block subTitle !text-[12px]">
          By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments
          in accordance with their terms. You can always cancel your subscription.
        </Typography.Text>
      </FormUi>
    </WrapperAddCard>
  )
}

export default AddCard
