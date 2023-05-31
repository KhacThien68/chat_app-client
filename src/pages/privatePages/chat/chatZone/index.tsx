import { styled } from 'styled-components'
import tw from 'twin.macro'

const ChatZone: React.FC = () => {
  return (
    <Container>
      <ChatContainer>This is chat Zone</ChatContainer>
    </Container>
  )
}
export default ChatZone

const Container = styled.div`
  ${tw`flex-1 h-full p-1`}
`

const ChatContainer = styled.div`
  ${tw`w-full h-full bg-[#fff] rounded-lg`}
`
