import React from 'react'
import { styled } from 'styled-components'
import tw from 'twin.macro'

const Footer: React.FC = () => {
  return <Container>Footer component</Container>
}

export default Footer

const Container = styled.div`
  ${tw`flex items-center justify-center h-14 bg-[#e5e5e8]`}
  border-bottom: 8px solid #0553a5;
`
