import { ROUTES } from '@/models'
import { MenuProps } from 'antd'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MenuHeaderStyled } from '../styles'
import { IoMdBed } from '@react-icons/all-files/io/IoMdBed'
import { MdFlightTakeoff } from '@react-icons/all-files/md/MdFlightTakeoff'

const items: MenuProps['items'] = [
  {
    label: <Link href={ROUTES.hotels}>Find Stays</Link>,
    key: ROUTES.hotels,
    icon: <IoMdBed />,
  },
  {
    label: <Link href={ROUTES.flight}>Find Flight</Link>,
    key: ROUTES.flight,
    icon: <MdFlightTakeoff />,
  },
]

const TypeTravelHeader = () => {
  const pathName = usePathname()

  return <MenuHeaderStyled selectedKeys={[pathName]} mode="horizontal" items={items} />
}

export default TypeTravelHeader
