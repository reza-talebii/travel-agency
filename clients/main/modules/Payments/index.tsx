'use client'

import { ICard } from '@/services/controllers/Bank/models'
import { Col, Row, Typography } from 'antd'
import { FC } from 'react'
import PaymentsItem from './components/Item'
import { WrapperPayments } from './styles'

const PaymentsMethods: FC<{ cards: ICard[] }> = ({ cards }) => {
  console.log(cards)

  return (
    <WrapperPayments>
      <Typography.Title>Payment methods</Typography.Title>

      <Row gutter={[12, 12]} className="methods-container">
        <Col span={8}>
          <PaymentsItem />
        </Col>
        <Col span={8}>
          <PaymentsItem />
        </Col>
      </Row>
    </WrapperPayments>
  )
}

export default PaymentsMethods
