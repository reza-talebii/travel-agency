'use client'

import { ROUTES } from '@/models'
import { Dropdown, MenuProps } from 'antd'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import { BiLogOut } from '@react-icons/all-files/bi/BiLogOut'
import { BiArrowFromRight } from '@react-icons/all-files/bi/BiArrowFromRight'

const items: MenuProps['items'] = [
  {
    label: (
      <Link href={ROUTES.account} className="flex w-full justify-between">
        <span>My Account</span>
        <BiArrowFromRight />
      </Link>
    ),
    key: '0',
    icon: <BiLogOut />,
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'Logout',
    key: '3',
    icon: <BiLogOut />,
  },
]

const ProfileHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Dropdown overlayClassName="profileDropdown" open menu={{ items }} trigger={['hover', 'click']}>
      {children}
    </Dropdown>
  )
}

export default ProfileHeader
