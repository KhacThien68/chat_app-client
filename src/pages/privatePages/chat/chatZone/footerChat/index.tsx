import { styled } from 'styled-components'
import tw from 'twin.macro'
import Option from './Option'
import InputChat from './InputChat'

function FooterContainer() {
  return (
    <Container>
      <Option />
      <InputChat />
    </Container>
  )
}

export default FooterContainer

const Container = styled.div`
  ${tw`h-12 p-2 flex items-center flex`}
  border-top: 1px solid #dbdbdb
`
