import { styled } from 'styled-components'
import tw from 'twin.macro'
import SearchInput from './SearchInput'
import ListChat from './ListChat'
import ChatOptions from './ChatOptions'

const ChatList: React.FC = () => {
  return (
    <Container>
      <Content>
        <SearchInput />
        <ListChat />
        <ChatOptions />
      </Content>
    </Container>
  )
}
export default ChatList

const Container = styled.div`
  ${tw`w-60 h-full flex flex-col bg-[#e5e5e8] p-1`}
`

const Content = styled.div`
  ${tw`bg-[#fff] h-full rounded-lg flex flex-col`}
`
