import { Button, HStack, Input } from '@chakra-ui/react'
import React from 'react'

type Props = {
  quantityRef: React.RefObject<HTMLInputElement>
  min?: number
  max?: number
  defaultValue?: number
  maxWidth?: string
  increaseButtonProps?: () => void
  decreaseButtonProps?: () => void
}

const ProudctQuantityInputField = ({
  quantityRef,
  min = 1,
  max = 22,
  defaultValue = 1,
  maxWidth = '100%',
  increaseButtonProps,
  decreaseButtonProps,
}: Props) => {
  const increaseQuantity = () => {
    if (quantityRef.current && quantityRef.current.valueAsNumber < max)
      quantityRef.current.valueAsNumber = quantityRef.current.valueAsNumber + 1
  }

  const decreaseQuantity = () => {
    if (quantityRef.current && quantityRef.current.valueAsNumber > min)
      quantityRef.current.valueAsNumber = quantityRef.current.valueAsNumber - 1
  }
  return (
    <HStack
      gap={0}
      spacing="0"
      border="solid 1px"
      borderColor="gray.200"
      width="100%"
      maxWidth={maxWidth}
    >
      <Button
        width={{ base: '10px', md: '20px' }}
        variant="outline"
        borderRadius="0"
        onClick={decreaseButtonProps ? decreaseButtonProps : decreaseQuantity}
      >
        -
      </Button>

      <Input
        textAlign="center"
        type="number"
        variant="outline"
        borderRadius="0"
        minWidth="20px"
        defaultValue={defaultValue}
        ref={quantityRef}
        min={min}
        max={max}
      />

      <Button
        width={{ base: '10px', md: '20px' }}
        variant="outline"
        borderRadius="0"
        onClick={increaseButtonProps ? increaseButtonProps : increaseQuantity}
      >
        +
      </Button>
    </HStack>
  )
}

export default ProudctQuantityInputField
