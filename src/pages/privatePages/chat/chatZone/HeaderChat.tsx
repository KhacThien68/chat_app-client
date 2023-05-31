import { styled } from 'styled-components'
import tw from 'twin.macro'
import Avatar from '../listChat/chatItem/Avatar'
import { Typography } from 'antd'
import { MenuOutlined, VideoCameraOutlined } from '@ant-design/icons'

const { Text } = Typography

function HeaderChat() {
  return (
    <Container>
      <LeftContent>
        <Avatar isOnline />
        <MainContent>
          <Name strong>Khắc Thiện</Name>
          <Status>Đang hoạt động</Status>
        </MainContent>
      </LeftContent>
      <RightContent>
        <VideoCameraOutlined />
        <MenuOutlined className="pl-2"/>
      </RightContent>
    </Container>
  )
}

export default HeaderChat

const Container = styled.div`
  ${tw`h-14 p-2 flex items-center justify-between`}
  border-bottom: 1px solid #dbdbdb
`
const LeftContent = styled.div`
  ${tw`flex p-2`}
`
const MainContent = styled.div`
  ${tw`flex flex-col pl-3`}
`

const Name = styled(Text)`
  ${tw`text-sm`}
`
const Status = styled(Text)`
  ${tw`text-sm`}
`
const RightContent = styled.div`
  ${tw`flex p-2`}
`
