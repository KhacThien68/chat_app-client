import { styled } from 'styled-components'
import tw from 'twin.macro'
import HeaderChat from './HeaderChat'
import FooterContainer from './footerChat'

const ChatZone: React.FC = () => {
  return (
    <Container>
      <ChatContainer>
        <HeaderChat />
        <ChatDisplay>aaaaa</ChatDisplay>
        <FooterContainer />
      </ChatContainer>
    </Container>
  )
}
export default ChatZone

const Container = styled.div`
  ${tw`flex-1 h-full p-1`}
`

const ChatContainer = styled.div`
  ${tw`flex flex-col w-full h-full bg-[#fff] rounded-lg`}
`

const ChatDisplay = styled.div`
  ${tw`flex-1 min-h-0`}
`
