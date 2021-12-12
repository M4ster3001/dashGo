import {
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps as ChackraInputProps,
  FormErrorMessage
} from '@chakra-ui/react'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChackraInputProps {
  name: string
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, ...rest }: InputProps,
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackraInput
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        _hover={{ bgColor: 'gray.900' }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
