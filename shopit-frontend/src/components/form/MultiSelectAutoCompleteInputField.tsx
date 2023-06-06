import { Box, Button, HStack, Input, Stack, Text } from '@chakra-ui/react'
import { ChangeEvent, MouseEventHandler, useRef, useState } from 'react'

type OptionType = {
  label: string
  value: string | number
}

interface Props {
  options: OptionType[]
}
export default function MultiSelectAutoCompleteInputField(props: Props) {
  const { options } = props
  const [selectedValue, setSelectedValue] = useState<OptionType[] | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const selectionRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState(options)

  const selectOption = () => {
    // setSelectedvalue
    console.log('selected something')
    // console.log('selected Option', e)
  }

  const filterOptions = (userInput: string) => {
    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    )
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputRef && inputRef.current) {
      setIsOpen(true)
      console.log('ref', inputRef.current)
      setFilteredOptions(filterOptions(inputRef.current.value))
      console.log('isOpen', isOpen)
    }
  }

  const onFocusHandler = () => {
    setIsOpen(true)
  }

  const onBlurHandler = () => {
    console.log('document.activeElement ', document.activeElement)
    console.log(' selectionRef.current', selectionRef.current)
    if (
      document.activeElement !== inputRef.current &&
      document.activeElement !== selectionRef.current
    )
      console.log('activeElement', document.activeElement)
    // setIsOpen(false)
  }

  return (
    <Stack direction="column">
      <Text>Multi select with tags</Text>
      <Box position="relative" onFocus={onFocusHandler} onBlur={onBlurHandler}>
        <Input ref={inputRef} onChange={onChangeHandler}></Input>

        <Stack
          ref={selectionRef}
          bgColor="#fff"
          zIndex="999"
          position="absolute"
          width="100%"
          maxHeight="280px"
          height={isOpen ? 'auto' : '0px'}
          overflowX="hidden"
          overflowY="scroll"
        >
          {filteredOptions.length === 0 ? (
            <Text> no option found.</Text>
          ) : (
            filteredOptions.map((option, id) => (
              <HStack key={`options_${id}`} onClick={() => selectOption()}>
                <Text>{option.label}</Text>
                <Text>{option.label}</Text>
              </HStack>
            ))
          )}
          {/* <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
          <option value="4"> 4</option> */}
        </Stack>
      </Box>
    </Stack>
  )
}
