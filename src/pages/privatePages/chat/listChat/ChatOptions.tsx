import { MessageFilled, VideoCameraFilled } from '@ant-design/icons'
import { ReactNode, useState } from 'react'
import { styled } from 'styled-components'
import tw from 'twin.macro'

type Option = {
  name: string
  icon: ReactNode
  key: number
}

const OPTION_LIST: Option[] = [
  { name: 'Chat', icon: <MessageFilled />, key: 1 },
  { name: 'Call', icon: <VideoCameraFilled />, key: 2 },
]

const ChatOptions: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number>(1)
  function handleClick(option: Option): void {
    console.log(option)
    setActiveMenu(option.key)
  }
  return (
    <Container>
      <ListContainer>
        {OPTION_LIST.map((option) => {
          return (
            <OptionItem
              key={option.key}
              onClick={() => handleClick(option)}
              isactive={(activeMenu === option.key).toString()}
            >
              {option.icon}
              <span>{option.name}</span>
            </OptionItem>
          )
        })}
      </ListContainer>
    </Container>
  )
}

export default ChatOptions

const Container = styled.div`
  ${tw`w-full h-12 bg-[#fff]`}
  border-top: 2px solid rgba(5, 5, 5, 0.06);
`
const ListContainer = styled.div`
  ${tw`flex justify-around items-center h-full w-full`}
`
type OptionItemProps = {
  isactive: string
}
const OptionItem = styled.div<OptionItemProps>`
  ${tw`flex flex-col`}
  color: ${(props) => props.isactive === 'true' ? '#1677ff' : '#8c8c8c'}
`
