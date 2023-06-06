import { Heading, Stack } from '@chakra-ui/react'

import LoginForm from '../components/user/LoginForm'

const LoginPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Heading marginTop={12} fontWeight="400" fontSize="6xl">
        Login
      </Heading>
      <LoginForm />
    </Stack>
  )
}

export default LoginPage
