import { Switch } from 'antd'
import { styled } from 'styled-components'
import tw from 'twin.macro'

type Props = {
  isOpen: boolean
  action: () => void
}

export const CollapseButton: React.FC<Props> = ({ isOpen, action }) => {
  return (
    <Container>
      <Switch
        unCheckedChildren="Close"
        checkedChildren="Open"
        defaultChecked
        checked={!isOpen}
        onChange={action}
      />
    </Container>
  )
}

const Container = styled.div`
  ${tw`w-full flex items-center h-12 cursor-pointer p-2 bg-[#fff]`}
  border-top: 2px solid rgba(5, 5, 5, 0.06);

  button {
    background: rgba(0, 0, 0, 0.45);

    span {
      font-size: 10px;
    }
  }
`
