import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { login } from '../../store/authStore/action'
import { useDispatch } from 'react-redux'
import {
  ErrorMessage,
  Form,
  FormButton,
  FormInput,
  FormLink,
  FormSpan,
  FormTitle,
  ItemContainer,
} from '../../components/form'
import { FaceIcon, InstaIcon, MailIcon } from '../../components/form/authIcon'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginParams } from '../../store/authStore/interface'

const LoginSchema = yup.object().shape({
  email: yup.string().email().required('You must provide a email address'),
  password: yup
    .string()
    .required('You must provide a password')
    .min(8, 'Password must have at least 8 characters')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      'Password must contains digit, lower case and upper case character',
    ),
})

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>({ resolver: yupResolver(LoginSchema) })
  const dispatch = useDispatch()
  const onSubmitLogin = (data: LoginParams) => {
    onFinish(data)
  }
  const onFinish = (values: LoginParams) => {
    dispatch(login(values))
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitLogin)}>
      <FormTitle>Sign in to Website</FormTitle>
      <ItemContainer>
        <FaceIcon />
        <InstaIcon />
        <MailIcon />
      </ItemContainer>
      <FormSpan>or use your email account</FormSpan>
      <FormInput {...register('email')} type="text" placeholder="Email" />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <FormInput
        {...register('password')}
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      <FormLink href="http://facebook.com/nkt68">
        Forgot your password?
      </FormLink>
      <FormButton type="submit">SIGN IN</FormButton>
    </Form>
  )
}

export default Login
