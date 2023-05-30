import { styled } from 'styled-components'
import tw from 'twin.macro'
import { Layout, Menu } from 'antd'
import ChatItem from './chatItem'

const { Sider: ASider } = Layout

const ListChat: React.FC = () => {
  return (
    <Container>
      <Title>Trò chuyện</Title>
      <ListContainer>
        <List>
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
          <ChatItem name="Khắc Thiện" />
        </List>
      </ListContainer>
    </Container>
  )
}

export default ListChat

const Container = styled.div`
  ${tw`p-2 pt-0 flex flex-1 flex-col`}
`

const Title = styled.h6``

const ListContainer = styled.div`
  ${tw`h-full`}
`

const List = styled.div`
  ${tw`h-full overflow-y-scroll`}
`