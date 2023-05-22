import React from 'react'
import Footer from './Footer'
import { Loading } from '../components'
import Header from './header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Loading />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
