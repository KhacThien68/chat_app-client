import { MailOutlined } from '@ant-design/icons'
import { styled } from 'styled-components'
import { commonStyleHoverIcon, commonStyleIcon } from './constants'

export const MailIcon = styled(MailOutlined)`
  svg {
    ${commonStyleIcon}

    &:hover {
      ${commonStyleHoverIcon}
    }
  }
`
