import { Typography } from 'antd'
import React, { FC } from 'react'
import { AddCardItemWrapper } from '../styles'
import { GrAddCircle } from '@react-icons/all-files/gr/GrAddCircle'

const AddNewCard: FC = () => {
  return (
    <AddCardItemWrapper>
      <GrAddCircle className="icon" color="#8dd3bb" />

      <Typography.Text className="text">Add a new card</Typography.Text>
    </AddCardItemWrapper>
  )
}

export default AddNewCard
