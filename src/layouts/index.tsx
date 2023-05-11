import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Loading } from '../components'

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
