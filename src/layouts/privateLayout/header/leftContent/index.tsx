import { styled } from 'styled-components'
import tw from 'twin.macro'
import logoIcon from '../../../../assets/logo/logoIcon.png'
import MenuOption from './MenuOption'

const LeftContent : React.FC = () => {
    const onClickLogo = () => {}
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