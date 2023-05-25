import { styled } from 'styled-components'
import tw from 'twin.macro'

export const FormInput = styled.input`
  ${tw`w-[350px] h-10 my-1 pl-6 text-[13px] text-[#181818] tracking-[.15px] border-none outline-none bg-[#ecf0f3] rounded-lg`}

  transition: .25s ease;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  &:focus {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
  }
`
