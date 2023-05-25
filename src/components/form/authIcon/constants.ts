import { css } from "styled-components"
import tw from "twin.macro"

export const commonStyleIcon = () => css`
  ${tw`object-contain mx-1 opacity-50 text-[32px] text-[#181818]`}
`
export const commonStyleHoverIcon = () => css`
  ${tw`opacity-100 cursor-pointer`}
  transition: .15s;
`