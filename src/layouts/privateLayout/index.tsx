import React from 'react'
import Footer from './Footer'
import Header from './header'
import { styled } from 'styled-components'
import tw from 'twin.macro'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Container>
  )
}

export default Layout

const Container = styled.div`
  ${tw`flex flex-col min-h-screen`}
`

const MainContainer = styled.div`
  ${tw`flex-1`}
`
