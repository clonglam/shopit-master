import { FormLabelProps, TextProps } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { ReactNode } from 'react'
import { useForm, UseFormProps } from 'react-hook-form'
import { ZodSchema } from 'zod'

// type FromData = z.infer<typeof schema>

interface Props extends UseFormProps {
  children: ReactNode
  schema: ZodSchema
  onSubmit: (data: any) => void
  labelStyleProps?: FormLabelProps
  errorStyleProps?: TextProps
}

export function Form({
  defaultValues,
  children,
  onSubmit,
  schema,
  ...rest
}: Props) {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    setValue,
                    getValues,
                    error: errors[child.props.name],
                    key: child.props.name,
                    ...rest,
                  },
                })
              : child
          })
        : children}
    </form>
  )
}

export default Form
