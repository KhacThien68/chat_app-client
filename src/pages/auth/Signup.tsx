import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {
  ErrorMessage,
  Form,
  FormButton,
  FormInput,
  FormSpan,
  FormTitle,
  ItemContainer,
} from '../../components/form'
import { FaceIcon, InstaIcon, MailIcon } from '../../components/form/authIcon'
import { SignupParams } from '../../store/authStore/interface'

const SignupSchema = yup.object().shape({
  firstName: yup.string().required('You must provide your first name'),
  lastName: yup.string().required('You must provide your last name'),
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

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupParams>({ resolver: yupResolver(SignupSchema) })
  const onSubmitSignUp = (data: SignupParams) => {
    console.log(data)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmitSignUp)}>
      <FormTitle>Create Account</FormTitle>
      <ItemContainer>
        <FaceIcon />
        <InstaIcon />
        <MailIcon />
      </ItemContainer>
      <FormSpan>or use email for registration</FormSpan>
      <FormInput
        {...register('firstName')}
        type="text"
        placeholder="First Name"
      />
      {errors.firstName && (
        <ErrorMessage>{errors.firstName.message}</ErrorMessage>
      )}
      <FormInput
        {...register('lastName')}
        type="text"
        placeholder="Last Name"
      />
      {errors.lastName && (
        <ErrorMessage>{errors.lastName.message}</ErrorMessage>
      )}
      <FormInput {...register('email')} type="email" placeholder="Email" />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <FormInput
        {...register('password')}
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      <FormButton type="submit">SIGN UP</FormButton>
    </Form>
  )
}

export default Signup
