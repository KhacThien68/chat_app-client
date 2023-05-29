import { css, styled } from 'styled-components'
import tw from 'twin.macro'

interface SwitchContainerProps {
  isHidden: string
}

const transitionStyle = () => css`
  left: calc(100% - 400px);
  transition: 1.25s;
  transform-origin: left;
`
export const SwitchContainer = styled.div<SwitchContainerProps>`
  ${tw`flex items-center justify-center absolute top-0 left-0 h-full w-[400px] p-12 z-[200] bg-[#ecf0f3] overflow-hidden`}
  transition: 1.25s;
  box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
  ${(props) => (props.isHidden === 'true' ? transitionStyle : '')}
`
