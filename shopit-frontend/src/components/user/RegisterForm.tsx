import { Box, Button, Input, Text, useToast } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import useAuthStore from './useAuthStore'

const RegisterRequestSchema = z
  .object({
    name: z
      .string({ required_error: 'Name is required' })
      .max(50, { message: 'name should not longer than 50.' }),
    email: z
      .string({ required_error: 'Email is Required' })
      .email({ message: 'Please input a vaild email.' })
      .max(50),
    password: z
      .string({ required_error: 'Password is Required.' })
      .nonempty({ message: 'Password is Required.' })
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // path of error
  })

export type RegisterRequest = z.infer<typeof RegisterRequestSchema>

const RegisterForm = () => {
  const navigate = useNavigate()
  const signup = useAuthStore((a) => a.signup)
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>({
    resolver: zodResolver(RegisterRequestSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (data: RegisterRequest) => {
    try {
      const user = await signup(data)

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
          placeholder="Enter your Email"
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
          Name
        </Text>
        <Input
          {...register('name')}
          type="text"
          placeholder="Enter your Name"
          borderRadius={0}
          id="name"
          border="0.5px solid"
          borderColor="gray.400"
        />
        {errors.name ? (
          <Text color="red.400" fontSize="sm">
            {errors.name.message}
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
          placeholder="Enter your Password"
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
      <Box marginBottom={5}>
        <Text
          letterSpacing="0.1rem"
          fontWeight="600"
          fontSize="12px"
          textTransform="uppercase"
          marginBottom={3}
        >
          Confirm Password
        </Text>

        <Input
          {...register('confirmPassword')}
          borderRadius={0}
          type="password"
          border="0.5px solid"
          placeholder=" Type the password again."
          borderColor="gray.400"
        />
        {errors.confirmPassword ? (
          <Text color="red.400" fontSize="sm">
            {errors.confirmPassword.message}
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
        Register
      </Button>
    </Box>
  )
}

export default RegisterForm
