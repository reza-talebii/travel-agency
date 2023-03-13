import { Space, Typography } from 'antd'
import Link from 'next/link'
import React, { FC } from 'react'

interface IProps {
  items: { title: string; href: string }[]
  title: string
}

const FooterListItem: FC<IProps> = ({ items, title }) => {
  return (
    <Space direction="vertical" size={20}>
      <Typography.Text className="text-[18px] font-bold mb-4">{title}</Typography.Text>

      {items.map((i, index) => (
        <Link href={i.href} key={index} className="subText">
          {i.title}
        </Link>
      ))}
    </Space>
  )
}

export default FooterListItem
