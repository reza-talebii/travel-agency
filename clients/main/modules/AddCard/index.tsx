'use client'

import ButtonUi from '@/components/UI/Button'
import CheckboxUi from '@/components/UI/Checkbox'
import FormUi from '@/components/UI/Form'
import InputUi from '@/components/UI/Input'
import { LeftOutlined } from '@ant-design/icons'
import { Form, Space, Typography } from 'antd'
import { WrapperAddCard } from './styles'

const AddCard = () => {
  const onAdd = () => {}

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
          <InputUi label="Card Number" placeholder="please enter your Card Number" />
        </Form.Item>
        <Form.Item name={'iban'} rules={[{ required: true }]}>
          <InputUi label="Shaba number" placeholder="please enter your Shaba number" />
        </Form.Item>

        <Form.Item noStyle name={'TermsPrivacy'} valuePropName="checked">
          <CheckboxUi>Securely save my information for 1-click checkout</CheckboxUi>
        </Form.Item>

        <ButtonUi loading={true} htmlType="submit" className="w-full h-[48px]">
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
