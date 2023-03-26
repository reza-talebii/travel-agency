'use client'

import React, { FC } from 'react'
import { TableUiStyled } from './style'
import { Table, TableProps } from 'antd'

interface IProps extends TableProps<any> {
  wrapperClassName?: string
}

const TableUi: FC<IProps> = ({ wrapperClassName, pagination = false, ...props }) => {
  return (
    <TableUiStyled className={wrapperClassName}>
      <Table pagination={pagination} {...props} />
    </TableUiStyled>
  )
}

export default TableUi
