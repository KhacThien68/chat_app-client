import { styled } from 'styled-components'
import tw from 'twin.macro'
import ChatItem from './chatItem'

const ListChat: React.FC = () => {
  return (
    <Container>
      <Title>Trò chuyện</Title>
      <ListContainer>
        <ChatItem name="Khắc Thiện" />
        <ChatItem name="Khắc Thiện" />
        <ChatItem name="Khắc Thiện" />
        <ChatItem name="Khắc Thiện" />
        <ChatItem name="Khắc Thiện" />
        <ChatItem name="Khắc Thiện" />
        <ChatItem name="Khắc Thiện" />
        <ChatItem name="Khắc Thiện" />
        <ChatItem name="Khắc Thiện" />
        <ChatItem name="Khắc Thiện" />
        <ChatItem name="Khắc Thiện" />
      </ListContainer>
    </Container>
  )
}

export default ListChat

const Container = styled.div`
  ${tw`p-2 min-h-0 pt-0 flex flex-1 flex-col`}
`

const Title = styled.h6``

const ListContainer = styled.div`
  ${tw`h-full overflow-y-scroll`}
`
