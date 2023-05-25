import { InstagramOutlined } from '@ant-design/icons'
import { styled } from 'styled-components'
import { commonStyleHoverIcon, commonStyleIcon } from './constants'

export const InstaIcon = styled(InstagramOutlined)`
  svg {
    ${commonStyleIcon}

    &:hover {
      ${commonStyleHoverIcon}
    }
  }
`
