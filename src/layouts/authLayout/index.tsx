import { useState } from 'react'
import { css, styled } from 'styled-components'
import tw from 'twin.macro'
import {
  Description,
  FormButton,
  FormTitle,
  SwitchContainer,
  SwitchContent,
} from '../../components/form'
import Signup from '../../pages/auth/Signup'
import Login from '../../pages/auth/Login'

const AuthLayout: React.FC = () => {
  const [hiddenItemC1, setHiddenItemC1] = useState<boolean>(true)
  const clickHideItem = () => {
    setHiddenItemC1(!hiddenItemC1)
  }

  return (
    <Container>
      <FormContainer
        zindex={100}
        left={'calc(100% - 600px )'}
        isHidden={(!hiddenItemC1).toString()}
      >
        <Signup />
      </FormContainer>
      <FormContainer
        zindex={hiddenItemC1 ? 200 : 0}
        left={'calc(100% - 600px )'}
        isHidden={(!hiddenItemC1).toString()}
      >
        <Login />
      </FormContainer>
      <SwitchContainer isHidden={(!hiddenItemC1).toString()}>
        <SwitchCircle1 isHidden={(!hiddenItemC1).toString()}></SwitchCircle1>
        <SwitchCircle2 isHidden={(!hiddenItemC1).toString()}></SwitchCircle2>
        <SwitchContent
          isHidden={(!hiddenItemC1).toString()}
          onClick={clickHideItem}
        >
          <FormTitle>Hello Friend !</FormTitle>
          <Description>
            Enter your personal details and start journey with us
          </Description>
          <FormButton className="switch__button button switch-btn">
            SIGN UP
          </FormButton>
        </SwitchContent>
        <SwitchContent
          isHidden={hiddenItemC1.toString()}
          onClick={clickHideItem}
        >
          <FormTitle>Welcome Back !</FormTitle>
          <Description>
            To keep connected with us please login with your personal info
          </Description>
          <FormButton className="switch__button button switch-btn">
            SIGN IN
          </FormButton>
        </SwitchContent>
      </SwitchContainer>
    </Container>
  )
}

export default AuthLayout

const Container = styled.div`
  ${tw`relative rounded-xl w-[1000px] min-w-[1000px] h-[600px] min-h-[600px] p-6 bg-[#ecf0f3] overflow-hidden`}
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  @media (max-width: 1200px) {
    transform: scale(0.7);
  }
  @media (max-width: 1000px) {
    transform: scale(0.6);
  }
  @media (max-width: 800px) {
    transform: scale(0.5);
  }
  @media (max-width: 600px) {
    transform: scale(0.4);
  }
`

interface FormContainerProps {
  zindex: number
  left: string
  isHidden: string
}
const FormContainer = styled.div<FormContainerProps>`
  ${tw`flex items-center justify-center absolute top-0 w-[600px] h-full p-6 bg-[#ecf0f3] `}
  z-index: ${(props) => props.zindex};
  left: ${(props) => props.left};
  transition: 1.25s;
  ${(props) =>
    props.isHidden === 'true'
      ? `left: 0;
  transition: 1.25s;
  transform-origin: right;`
      : ''}
`

const transitionStyle = () => css`
  left: calc(100% - 400px);
  transition: 1.25s;
  transform-origin: left;
`

interface SwitchCircleProps {
  isHidden: string
}

const SwitchCircle1 = styled.div<SwitchCircleProps>`
  ${tw`absolute bottom-[-60%] left-[-60%] w-[500px] h-[500px] bg-[#ecf0f3] rounded-[50%]`}
  transition: 1.25s;
  box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
  ${(props) => (props.isHidden === 'true' ? transitionStyle : '')}
`
const SwitchCircle2 = styled.div<SwitchCircleProps>`
  ${tw`absolute bottom-[-60%] top-[-30%] left-[60%] w-[300px] h-[300px] bg-[#ecf0f3] rounded-[50%]`}
  transition: 1.25s;
  box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
  ${(props) => (props.isHidden === 'true' ? transitionStyle : '')}
`
