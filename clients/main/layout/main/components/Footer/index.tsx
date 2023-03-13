'use client'

import ImageUi from '@/components/UI/Image'
import { Space } from 'antd'
import React from 'react'
import FooterListItem from './components/FooterListItem'
import SubscribeNewsletter from './components/SubscribeNewsletter'
import { footerItemList } from './constants/ItemList'
import { ContentFooterWrapper, FooterStyled } from './styles'
import logo from '@/public/assets/images/landing/footerLogo.svg'

const Footer = () => {
  return (
    <FooterStyled>
      <SubscribeNewsletter />

      <ContentFooterWrapper>
        <Space className="justify-between w-full flex items-start">
          <ImageUi src={logo} alt="logo" width="120px" height="39.15px" />
          <FooterListItem items={footerItemList.contactUs} title="Contact Us" />
          <FooterListItem items={footerItemList.aboutUs} title="About Us" />
          <FooterListItem items={footerItemList.blog} title="Travel Blogs" />
          <FooterListItem items={footerItemList.destinations} title="Our Destinations" />
          <FooterListItem items={footerItemList.Activities} title="Our Activities" />
        </Space>
      </ContentFooterWrapper>
    </FooterStyled>
  )
}

export default Footer
