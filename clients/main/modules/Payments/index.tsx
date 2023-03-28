'use client'

import { Col, Row, Typography } from 'antd'
import AddNewCard from './components/AddCardItem'
import PaymentsItem from './components/Item'
import { WrapperPayments } from './styles'

const PaymentsMethods = () => {
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
