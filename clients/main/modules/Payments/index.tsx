import { Col, Row, Typography } from 'antd'
import { WrapperPayments } from './styles'

const PaymentsMethods = () => {
  return (
    <WrapperPayments>
      <Typography.Title>Payment methods</Typography.Title>

      <Row gutter={[12, 12]}>
        <Col span={8}>1</Col>
        <Col span={8}>1</Col>
        <Col span={8}>1</Col>
      </Row>
    </WrapperPayments>
  )
}

export default PaymentsMethods
