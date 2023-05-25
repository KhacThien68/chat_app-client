import { styled } from 'styled-components'
import tw from 'twin.macro'

export const FormButton = styled.button`
${tw`w-[180px] h-12 rounded-3xl mt-12 font-bold text-[14px] tracking-[1.5px] bg-[#4B70E2] text-[#f9f9f9] border-none outline-none`}
box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;

&:hover {
  ${tw`cursor-pointer `}
  box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
  transform: scale(0.985);
  transition: 0.25s;
}
`
