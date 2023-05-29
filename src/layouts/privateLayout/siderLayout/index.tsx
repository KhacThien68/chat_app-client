import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import { styled } from 'styled-components'
import tw from 'twin.macro'
import { CollapseButton } from './CollapseButton'

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  UserOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  TeamOutlined,
  ShopOutlined,
  UserOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  TeamOutlined,
  ShopOutlined,
  UserOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}))

const { Sider: ASider } = Layout

const SiderLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClickCollapse = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container>
      <Sider
        collapsible={true}
        collapsed={isOpen}
        trigger={
          <CollapseButton isOpen={isOpen} action={handleClickCollapse} />
        }
      >
        <MenuContainer>
          <MenuSider mode="inline" defaultSelectedKeys={['4']} items={items} />
        </MenuContainer>
      </Sider>
    </Container>
  )
}

export default SiderLayout

const Container = styled.div`
  ${tw`h-full `}
`
const Sider = styled(ASider)`
  ${tw`flex flex-1 h-full flex-col justify-between`}
  border-right: 2px solid rgba(5, 5, 5, 0.06);
  align-items: stretch;

  .ant-layout-sider-children {
    height: 100%;
    overflow-y: scroll;
  }

  ul {
    border-inline-end: none !important;
  }
`

const MenuContainer = styled.div`
overflow-auto`
const MenuSider = styled(Menu)`
  ${tw`overflow-auto`}
`
