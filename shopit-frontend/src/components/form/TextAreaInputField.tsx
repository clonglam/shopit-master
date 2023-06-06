import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  InputProps,
  Text,
  Textarea,
  TextareaProps,
  TextProps,
} from '@chakra-ui/react'
import { FieldError, UseFormRegister } from 'react-hook-form'

// type FromData = z.infer<typeof schema>

interface Props {
  name: string
  label: string
  placeholder?: string
  labelStyleProps?: FormLabelProps
  errorStyleProps?: TextProps
  inputStyleProps?: TextareaProps
  register?: UseFormRegister<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any
  }>
  error?: FieldError
}

const TextAreaInputField = (props: Props) => {
  const {
    register,
    error,
    label,
    name,
    placeholder = '',
    labelStyleProps,
    inputStyleProps,
    errorStyleProps,
    ...rest
  } = props

  if (!register) return <Text>There is no Register.</Text>

  return (
    <FormControl isInvalid={error ? true : false} border={0} marginBottom={5}>
      <FormLabel htmlFor={name} {...labelStyleProps}>
        {label}
      </FormLabel>
      <Textarea
        id={name}
        placeholder={placeholder}
        borderColor="gray.400"
        {...register(name)}
        {...rest}
        {...inputStyleProps}
      />
      <FormErrorMessage {...errorStyleProps}>
        {error && error.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export default TextAreaInputField
