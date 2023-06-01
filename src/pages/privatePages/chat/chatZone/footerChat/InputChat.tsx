import { styled } from 'styled-components'
import tw from 'twin.macro'
import { Input as AInput, Button } from 'antd'
import { SendOutlined } from '@ant-design/icons'

function InputChat() {
  return (
    <Container>
      <Input placeholder="Aa" />
      <Button
        type="primary"
        icon={<SendOutlined />}
        className="ml-2 flex items-center justify-center bg-[#1677ff]"
      />
    </Container>
  )
}

export default InputChat

const Container = styled.div`
  ${tw`flex flex-1 items-center px-1`}
`

const Input = styled(AInput)`
  ${tw`w-full items-center`}
`
