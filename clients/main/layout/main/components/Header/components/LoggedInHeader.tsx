import { ROUTES } from '@/models'
import useAuthStore from '@/store/auth'
import { Avatar, MenuProps } from 'antd'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdFavorite } from '@react-icons/all-files/md/MdFavorite'
import { MenuHeaderStyled } from '../styles'
import ProfileHeader from './ProfileDropDown'

const LoggedInHeader = () => {
  const { userInfo } = useAuthStore()
  const pathName = usePathname()

  const fullName = `${userInfo?.firstName || ''}  ${userInfo?.lastName.substring(1) || ''}`

  const items: MenuProps['items'] = [
    {
      label: <Link href={ROUTES.favorites}>Favorites</Link>,
      key: ROUTES.favorites,
      icon: <MdFavorite />,
    },
    {
      label: <Link href={ROUTES.account}>{fullName}</Link>,
      key: ROUTES.account,
      icon: <Avatar src="/assets/images/banksIcon/ansar.png" />,
      className: '!flex !items-center',
    },
  ]

  return <MenuHeaderStyled className="!justify-end " selectedKeys={[pathName]} mode="horizontal" items={items} />
}

export default LoggedInHeader
