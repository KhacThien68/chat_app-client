import { styled } from 'styled-components'
import AuthLayout from '../../layouts/authLayout'
import tw from 'twin.macro'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../utils/storage'
const Auth: React.FC = () => {
  const navigate = useNavigate()
  const user = useSelector(getUser)

  useEffect(() => {
    if (user) navigate('/', { replace: true })
  }, [user, navigate])

  return (
    <Container>
      <AuthLayout />
    </Container>
  )
}

export default Auth

const Container = styled.div`
  ${tw`w-full min-h-screen flex items-center justify-center font-sans bg-[#ecf0f3] text-[#a0a5a8]`}
`
