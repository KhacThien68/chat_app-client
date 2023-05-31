import { styled } from 'styled-components'
import { Avatar as CAvatar } from 'antd'
import logoIcon from '../../../../../assets/logo/logoIcon.png'
import tw from 'twin.macro'

type Props = {
  srcImg?: string
  isOnline?: boolean
}

export const Avatar: React.FC<Props> = ({ srcImg, isOnline }) => {
  return (
    <Container>
      <Content src={srcImg || logoIcon} alt="avata logo" />
      {isOnline && <OnlineStatus />}
    </Container>
  )
}

export default Avatar

const Container = styled.div`
  ${tw`relative`}
`
const Content = styled(CAvatar)`
  ${tw``}
  border: 1px solid #e5e7eb;
`
const OnlineStatus = styled.div`
  ${tw`absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#4ade80]`}
  border: 2px solid #fff;
`
