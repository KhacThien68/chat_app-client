import {
  CameraOutlined,
  FileImageOutlined,
  RightCircleOutlined,
} from '@ant-design/icons'
import { Badge } from 'antd'
import { useState } from 'react'
import { styled } from 'styled-components'
import tw from 'twin.macro'

function Option() {
  const [show, setShow] = useState(true)

  return (
    <Container>
      <SwitchContainer rotate={show ? '-180deg' : '0'}>
        <RightCircleOutlined
          className="text-[24px] text-[#1677ff]"
          onClick={() => setShow(!show)}
        />
      </SwitchContainer>
      <OptionItem>
        <Badge
          count={
            show ? (
              <FileImageOutlined className="text-[24px] text-[#1677ff]" />
            ) : (
              0
            )
          }
        />
      </OptionItem>
      <OptionItem>
        <Badge
          count={
            show ? <CameraOutlined className="text-[24px] text-[#1677ff]" /> : 0
          }
        />
      </OptionItem>
    </Container>
  )
}

export default Option

const Container = styled.div`
  ${tw`flex items-center`}
`

type SwitchContainerProps = {
  rotate: string
}
const SwitchContainer = styled.div<SwitchContainerProps>`
  ${tw`flex items-center p-1`}
  transform: ${(props) => `rotate(${props.rotate})`};
  transition: 0.3s ease-in-out all;
`
const OptionItem = styled.div`
  ${tw`m-auto p-1`}
`
