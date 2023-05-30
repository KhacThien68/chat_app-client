import React from 'react'
import Footer from './Footer'
import Header from './header'
import { styled } from 'styled-components'
import tw from 'twin.macro'
import SiderLayout from './siderLayout'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <Content>
          <SiderLayout />
          {children}
        </Content>
      </ContentContainer>
      <Footer />
    </Container>
  )
}

export default Layout

const Container = styled.div`
  ${tw`flex flex-col h-screen bg-[#e5e5e8]`}
`
const ContentContainer = styled.div`
  ${tw`h-full overflow-hidden flex-1`}
`
const Content = styled.div`
  ${tw`h-full flex`}
`
