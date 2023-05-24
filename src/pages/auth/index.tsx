import { styled } from 'styled-components'
import AuthLayout from '../../layouts/authLayout'
import tw from 'twin.macro'

const Auth: React.FC = () => {
  return (
    <Container>
      <AuthLayout />
    </Container>
    // {/* <Routes>
    //   <Route path={AUTH.LOGIN} element={<Login />} />
    //   <Route path={AUTH.SIGNUP} element={<Signup />} />
    //   <Route path="" element={<Navigate to={AUTH.LOGIN} replace />} />
    // </Routes> */}
  )
}

export default Auth

const Container = styled.div`
  ${tw`w-full min-h-screen flex items-center justify-center font-sans bg-[#ecf0f3] text-[#a0a5a8]`}
`
