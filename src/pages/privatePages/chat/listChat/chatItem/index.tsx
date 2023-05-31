import { styled } from 'styled-components'
import tw from 'twin.macro'
import Avatar from './Avatar'
import { Typography } from 'antd'

type Props = {
  srcImg?: string
  name: string
  isOnline?: boolean
}

const { Text } = Typography
const ChatItem: React.FC<Props> = ({ srcImg, name, isOnline }) => {
  return (
    <Container>
      <Avatar srcImg={srcImg} isOnline={isOnline}/>
      <Content>
        <Name strong>{name}</Name>
      </Content>
    </Container>
  )
}

export default ChatItem

const Container = styled.div`
  ${tw`flex py-2 items-center w-full rounded-lg`}

  &:hover {
    ${tw`text-[#1677ff] bg-[#e6f4ff] cursor-pointer`}
  }
`
const Content = styled.div`
  ${tw`flex-1 pl-2`}
`
const Name = styled(Text)`
  ${tw`text-sm`}
`
