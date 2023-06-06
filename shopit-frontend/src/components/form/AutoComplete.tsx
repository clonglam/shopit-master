import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  Input,
  List,
  ListItem,
  Tag,
  Text,
  TextProps,
  useDisclosure,
} from '@chakra-ui/react'
import { useMemo, useRef, useState } from 'react'
import {
  FieldError,
  RegisterOptions,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'

type OptionType = {
  id: string
  title: string
  value: string | number
}

interface Props {
  name: string
  label: string
  setValue?: UseFormSetValue<{
    [x: string]: any
  }>
  placeholder?: string
  selections?: OptionType[]
  labelStyleProps?: FormLabelProps
  errorStyleProps?: TextProps
  // inputStyleProps?: InputProps
  registerOption?: RegisterOptions
  getValues?: UseFormGetValues<{
    [x: string]: any
  }>
  register?: UseFormRegister<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any
  }>
  error?: FieldError
}

const AutoComplete = (props: Props) => {
  const {
    register,
    error,
    label,
    name,
    setValue: setHookFormValue,
    getValues,
    selections = [],
    labelStyleProps,
    placeholder = '',
    errorStyleProps,
  } = props

  if (!register) return <Text>There is no Register.</Text>
  if (!setHookFormValue) return <Text>There is no setValue.</Text>
  if (!getValues) return <Text>There is no getValue.</Text>

  const defaultSelection = useMemo(
    () => selections.filter((item) => getValues(name).includes(item.value)),
    []
  )

  const inputRef = useRef<HTMLInputElement>(null)
  const [filteredOptions, setFilteredOptions] = useState<OptionType[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [forceSelectionOpen, setForceSelectionOpen] = useState(true)
  const [selectedItems, setSelectedItems] = useState<OptionType[]>(
    defaultSelection || []
  )

  const handleChange = () => {
    if (inputRef && inputRef.current) {
      const inputValue = inputRef.current.value
      onOpen()

      setFilteredOptions(
        inputValue.length === 0
          ? selections
          : selections.filter(
              (result) =>
                result.title.toLowerCase().indexOf(inputValue.toLowerCase()) >
                -1
            )
      )
    }
  }

  const handleItemClick = (item: Selection) => {
    const selectedItemIndex = selectedItems.findIndex(
      (selectedItem) => selectedItem.id === item.id
    )

    if (selectedItemIndex !== -1) {
      // Item already selected, remove it from selectedItems
      const list = selectedItems.filter(
        (selectedItem) => selectedItem.id !== item.id
      )
      setSelectedItems(list)

      setHookFormValue(
        name,
        list.map((item) => item.value)
      )
    } else {
      // Item not selected, add it to selectedItems
      const list = [...selectedItems, item]
      setSelectedItems(list)
      setHookFormValue(
        name,
        list.map((item) => item.value)
      )
    }
    if (inputRef && inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const handleItemHover = () => {
    setForceSelectionOpen(true)
  }

  const handleLeaveselection = () => {
    setForceSelectionOpen(false)
    onClose()
  }

  return (
    <FormControl isInvalid={error ? true : false} border={0} marginBottom={5}>
      <FormLabel htmlFor={name} {...labelStyleProps}>
        {label}
      </FormLabel>

      <Box
        position="relative"
        width="100%"
        border="1px solid"
        height="64px"
        borderRadius={5}
        borderColor="gray.400"
      >
        <Flex
          padding={3}
          width="100%"
          height="100%"
          justifyContent="flex-start"
          alignItems="start"
        >
          <RenderTags selectedItems={selectedItems} />

          <Input
            bgColor="#fff"
            ref={inputRef}
            fontSize="sm"
            ring="0px"
            border="0"
            height="24px"
            width="180px"
            placeholder={placeholder}
            // value={query}
            onChange={handleChange}
            onFocus={handleChange}
            onBlur={() => {
              if (!forceSelectionOpen) {
                onClose()
              }
            }}
          />
        </Flex>

        {isOpen && (
          <SelectionDropDownList
            selections={filteredOptions}
            selectHandler={handleItemClick}
            selectedItems={selectedItems}
            handleItemHover={handleItemHover}
            handleLeaveselection={handleLeaveselection}
          />
        )}
      </Box>
      <FormErrorMessage {...errorStyleProps}>
        {error && error.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export default AutoComplete

interface Selection {
  id: string
  value: any
  title: string
}

interface ISelectionDropDownList {
  selections: Selection[]
  selectedItems: Selection[]
  selectHandler: (item: Selection) => void
  handleItemHover: () => void
  handleLeaveselection: () => void
}

const SelectionDropDownList = ({
  selections,
  selectHandler,
  selectedItems,
  handleItemHover,
  handleLeaveselection,
}: ISelectionDropDownList) => {
  return (
    <List
      bgColor="#fff"
      width="100%"
      zIndex="999"
      border="1px solid"
      maxHeight="180px"
      borderRadius={5}
      position="absolute"
      overflowY="scroll"
      overflowX="hidden"
      onMouseEnter={handleItemHover}
      onMouseLeave={handleLeaveselection}
    >
      {selections.length === 0 ? (
        <Box padding={3}>
          <Text> There are no Record Found.</Text>
        </Box>
      ) : (
        selections.map((selection) => (
          <ListItem
            key={selection.id}
            paddingY={3}
            paddingX={2}
            onClick={() => selectHandler(selection)}
            cursor="pointer"
            _hover={{ bg: 'gray.100' }}
            bg={
              selectedItems.some((item) => item.id === selection.id)
                ? 'gray.300'
                : undefined
            }
          >
            <Text>{selection.title}</Text>
          </ListItem>
        ))
      )}
    </List>
  )
}

interface IRenderTags {
  selectedItems: OptionType[]
}
const RenderTags = ({ selectedItems }: IRenderTags) => {
  return (
    <>
      {selectedItems.map((item) => (
        <Tag key={item.id} size="md" variant="solid" bgColor="gray.300" mr={1}>
          {item.title}
        </Tag>
      ))}
    </>
  )
}
