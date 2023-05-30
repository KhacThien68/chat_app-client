import { styled } from 'styled-components'
import tw from 'twin.macro'
import { MENU_OPTIONS } from '../constants'
import { MenuOptionItem } from '../../../../models'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectActiveMenuItem } from '../../../../app/slice'

const MenuOption: React.FC = () => {
  const navigate = useNavigate()

  const activeMenuItem = useSelector(selectActiveMenuItem)

  const handleClick = (item: MenuOptionItem) => {
    if (activeMenuItem !== item.key) {
      navigate(item.path)
    }
  }
  return (
    <Container>
      {Object.values(MENU_OPTIONS).map((item, index) => {
        return (
          <ItemContainer
            onClick={() => handleClick(item)}
            key={index}
            isactive={(activeMenuItem === item.key).toString()}
          >
            <p>{item.title}</p>
          </ItemContainer>
        )
      })}
    </Container>
  )
}

export default MenuOption

const Container = styled.div`
  ${tw`flex h-full ml-3`}
`

interface ItemProps {
  isactive: string
}

const ItemContainer = styled.div<ItemProps>`
  ${tw`flex items-center h-full px-3 text-xl`}

  &:hover,
  &:focus {
    ${tw`bg-[#e7f3ff] cursor-pointer`}
  }
  border-bottom: ${(props) => (props.isactive === 'true' ? '4px solid #2e71ff' : '')};
`
