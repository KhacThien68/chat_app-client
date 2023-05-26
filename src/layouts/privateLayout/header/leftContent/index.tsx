import { styled } from 'styled-components'
import tw from 'twin.macro'
import logoIcon from '../../../../assets/logo/logoIcon.png'
import MenuOption from './MenuOption'
import { useNavigate } from 'react-router-dom'

const LeftContent: React.FC = () => {
  const navigate = useNavigate()
  const onClickLogo = () => {
    navigate('/')
  }
  return (
    <Container>
      <Logo onClick={onClickLogo}>
        <img src={logoIcon} alt="logo icon" />
      </Logo>
      <MenuOption />
    </Container>
  )
}

export default LeftContent

const Container = styled.div`
  ${tw`flex items-center h-full`}
`
const Logo = styled.div`
  &:hover {
    ${tw`cursor-pointer`}
  }
  img {
    ${tw`h-14 pl-2`}
  }
`
