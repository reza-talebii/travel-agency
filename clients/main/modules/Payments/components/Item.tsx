import { Space, Typography } from 'antd'
import React, { FC } from 'react'
import { ItemPaymentsWrapper } from '../styles/Item'
import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete'
import ImageUi from '@/components/UI/Image'
import { ICard } from '@/services/controllers/Bank/models'
import { BiRevision } from '@react-icons/all-files/bi/BiRevision'

const PaymentsItem: FC = () => {
  return (
    <ItemPaymentsWrapper>
      <Space className="justify-between items-center w-full">
        <BiRevision />
        <AiFillDelete className="delete-icon" />
      </Space>

      <section className="mt-auto text-center">
        <ImageUi className="mx-auto" src="/assets/images/banksIcon/ansar.png" alt="bank logo" width="50px" height="50px" />

        <Typography.Title level={4}>50290810233434</Typography.Title>
        <Typography.Text>IR23 - 33030 - 430234 - 4434</Typography.Text>
      </section>
    </ItemPaymentsWrapper>
  )
}

export default PaymentsItem
