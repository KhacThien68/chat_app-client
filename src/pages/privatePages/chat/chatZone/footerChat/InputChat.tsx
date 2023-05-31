import { styled } from 'styled-components'
import tw from 'twin.macro'
import { Input as AInput } from 'antd';

function InputChat() {
  return <Container>
    <Input placeholder="Aa" />
  </Container>
}

export default InputChat

const Container = styled.div`
  ${tw`flex items-center`}
`

const Input = styled(AInput)``