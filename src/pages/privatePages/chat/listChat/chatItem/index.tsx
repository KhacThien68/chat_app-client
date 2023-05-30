import { styled } from 'styled-components'
import tw from 'twin.macro'
import Avatar from './Avatar'
import { Typography } from 'antd'

type Props = {
  srcImg?: string
  name: string
}

const { Text } = Typography
const ChatItem: React.FC<Props> = ({ srcImg, name }) => {
  return (
    <Container>
      <Avatar srcImg={srcImg} />
      <Content>
        <Name strong>{name}</Name>
      </Content>
    </Container>
  )
}

export default ChatItem

const Container = styled.div`
  ${tw`flex pt-3 items-center w-full`}
`
const Content = styled.div`
  ${tw`flex-1 pl-2`}
`
const Name = styled(Text)`
  ${tw`text-sm`}
`
