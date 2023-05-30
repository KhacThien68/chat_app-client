import { styled } from 'styled-components'
import tw from 'twin.macro'
import LeftContent from './leftContent'
import RightContent from './rightContent'

const Header = () => {
  return (
    <Container>
      <LeftContent />
      <RightContent />
    </Container>
  )
}

export default Header

const Container = styled.section.attrs({})`
  ${tw`sticky top-0 z-10 flex items-center justify-between w-full h-14 bg-[#fff]`}
  border-bottom: 2px solid #dbdbdb;
`
