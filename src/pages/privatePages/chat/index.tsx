import { styled } from 'styled-components'
import ChatList from './listChat'
import tw from 'twin.macro'
import ChatZone from './chatZone'

const Chat: React.FC = () => {
  return (
    <Container>
      <ChatList />
      <ChatZone />
    </Container>
  )
}

export default Chat

const Container = styled.div`
  ${tw`flex w-full h-full`}
`
