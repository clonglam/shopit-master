import { Box, Button, Input, Text, useToast } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import useAuthStore from './useAuthStore'

const LoginRequestSchema = z.object({
  email: z
    .string({ required_error: 'Email is Required' })
    .email({ message: 'Please input a vaild email.' }),
  password: z
    .string({ required_error: 'Password is Required.' })
    .nonempty({ message: 'Password is Required.' }),
})

export type LoginRequest = z.infer<typeof LoginRequestSchema>

const LoginForm = () => {
  const login = useAuthStore((a) => a.login)
  const navigate = useNavigate()
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(LoginRequestSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginRequest) => {
    try {
      const user = await login(data)

      if (user) {
        toast({ status: 'success', title: `Welcome back ${user.name}` })
        navigate('/')
      }
    } catch (err) {
      toast({
        status: 'error',
        title: 'Error',
        description: 'Oh no, the is Error!',
        isClosable: true,
      })
    }
  }
  return (
    <Box
      width="400px"
      padding={8}
      margin="auto"
      bgColor="#fff"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box marginBottom={5}>
        <Text
          letterSpacing="0.1rem"
          fontWeight="600"
          fontSize="12px"
          textTransform="uppercase"
          marginBottom={3}
        >
          Email
        </Text>
        <Input
          {...register('email')}
          type="email"
          placeholder="Email"
          borderRadius={0}
          id="email"
          border="0.5px solid"
          borderColor="gray.400"
        />
        {errors.email ? (
          <Text color="red.400" fontSize="sm">
            {errors.email.message}
          </Text>
        ) : (
          ''
        )}
      </Box>

      <Box marginBottom={5}>
        <Text
          letterSpacing="0.1rem"
          fontWeight="600"
          fontSize="12px"
          textTransform="uppercase"
          marginBottom={3}
        >
          Password
        </Text>

        <Input
          {...register('password')}
          borderRadius={0}
          type="password"
          border="0.5px solid"
          placeholder="Password"
          borderColor="gray.400"
        />
        {errors.password ? (
          <Text color="red.400" fontSize="sm">
            {errors.password.message}
          </Text>
        ) : (
          ''
        )}
      </Box>

      <Box marginBottom={2}>
        <Link to="/register">
          <Text color="primary.500" _hover={{ textDecoration: 'underline' }}>
            Join the rewards.
          </Text>
        </Link>

        <Link to="/forgotpassword">
          <Text color="primary.500" _hover={{ textDecoration: 'underline' }}>
            Forgot password.
          </Text>
        </Link>
      </Box>

      <Button
        width="full"
        color="primary.500"
        border="2px solid"
        borderRadius={0}
        variant="outline"
        textTransform="uppercase"
        fontSize="sm"
        _hover={{ bgColor: 'primary.500', color: '#fff' }}
        type="submit"
      >
        Login
      </Button>
    </Box>
  )
}

export default LoginForm
