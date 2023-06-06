import { Heading, Stack } from '@chakra-ui/react'

import RegisterForm from '../components/user/RegisterForm'

const SignupPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Heading marginTop={12} fontWeight="400" fontSize="6xl">
        Register
      </Heading>
      <RegisterForm />
    </Stack>
  )
}

export default SignupPage
