import { styled } from 'styled-components'
import { Avatar as CAvatar } from 'antd'
import logoIcon from '../../../../../assets/logo/logoIcon.png'
import tw from 'twin.macro'

type Props = {
  srcImg?: string
}

export const Avatar: React.FC<Props> = ({ srcImg }) => {
  return (
    <Container>
      <Content src={srcImg || logoIcon} alt="avata logo" />
    </Container>
  )
}

export default Avatar

const Container = styled.div`
  ${tw``}
`
const Content = styled(CAvatar)`
  ${tw``}
  border: 1px solid #e5e7eb;
`
