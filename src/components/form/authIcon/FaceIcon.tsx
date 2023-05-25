import { FacebookOutlined } from '@ant-design/icons'
import { styled } from 'styled-components'
import { commonStyleHoverIcon, commonStyleIcon } from './constants'

export const FaceIcon = styled(FacebookOutlined)`
  svg {
    ${commonStyleIcon}

    &:hover {
      ${commonStyleHoverIcon}
    }
  }
`

