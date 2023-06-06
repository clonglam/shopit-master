import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  InputProps,
  Select,
  SelectProps,
  Text,
  TextProps,
} from '@chakra-ui/react'
import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form'

// type FromData = z.infer<typeof schema>
type OptionType = {
  label: string
  value: string | number
}

interface Props {
  name: string
  label: string
  selectProps?: SelectProps
  options: OptionType[]
  placeholder?: string
  labelStyleProps?: FormLabelProps
  errorStyleProps?: TextProps
  inputStyleProps?: InputProps
  registerOption?: RegisterOptions
  register?: UseFormRegister<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any
  }>
  error?: FieldError
}

const SelectInputField = (props: Props) => {
  const {
    register,
    error,
    label,
    name,
    options,
    selectProps,
    placeholder = '',
    labelStyleProps,
    errorStyleProps,
    ...rest
  } = props

  if (!register) return <Text>There is no Register.</Text>

  return (
    <FormControl isInvalid={error ? true : false} border={0} marginBottom={5}>
      <FormLabel htmlFor={name} {...labelStyleProps}>
        {label}
      </FormLabel>

      <Select
        id={name}
        borderColor="gray.400"
        placeholder={placeholder}
        {...register(name)}
        {...selectProps}
      >
        {options.map(({ value, label }, index) => (
          <option key={`${index}_${label}`} value={value}>
            {label}
          </option>
        ))}
      </Select>

      <FormErrorMessage {...errorStyleProps}>
        {error && error.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export default SelectInputField
