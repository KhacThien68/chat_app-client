import { styled } from 'styled-components'
import tw from 'twin.macro'
import { MENU_OPTIONS } from '../constants'
import { useState } from 'react'
import { MenuOptionItem } from '../../../../models'

const MenuOption: React.FC = () => {
  const [activeItem, setActiveitem] = useState(1)
  const handleClick = (item: MenuOptionItem) => {
    if (activeItem !== item.key) setActiveitem(item.key)
  }
  return (
    <Container>
      {Object.values(MENU_OPTIONS).map((item, index) => {
        return (
          <ItemContainer
            onClick={() => handleClick(item)}
            key={index}
            isactive={activeItem === item.key}
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
  isactive: boolean
}

const ItemContainer = styled.div<ItemProps>`
  ${tw`flex items-center h-full px-3 text-xl`}

  &:hover,
  &:focus {
    ${tw`bg-[#e2e2e2] cursor-pointer`}
  }
  border-bottom: ${(props) => (props.isactive ? '4px solid #2e71ff' : '')};
`
