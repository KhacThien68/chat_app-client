import { styled } from 'styled-components'
import tw from 'twin.macro'

interface SwitchContentProps {
  ishidden: boolean
}
export const SwitchContent = styled.div<SwitchContentProps>`
  ${tw`flex items-center justify-center flex-col absolute w-[400px] py-12 px-14`}
  transition: 1.25s;
  ${(props) =>
    props.ishidden
      ? `visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: 1.25s;`
      : ''}
`
