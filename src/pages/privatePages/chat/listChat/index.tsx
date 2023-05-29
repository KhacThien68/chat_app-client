import { styled } from 'styled-components'
import tw from 'twin.macro'

const ChatList: React.FC = () => {
  return <Container>This is chat List</Container>
}
export default ChatList

const Container = styled.div`
  ${tw`w-60 h-full overflow-scroll`}
`
