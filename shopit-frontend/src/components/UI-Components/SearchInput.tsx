import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import useProductQueryStore from '../../store/productQueryStore'

const SearchInput = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false)
  const ref = useRef<HTMLInputElement>(null)
  const setSearchText = useProductQueryStore((s) => s.setProductQuery)
  const navigate = useNavigate()

  const submitSearchForm = (event: React.FormEvent) => {
    event.preventDefault()
    if (ref.current) {
      if (!ref.current.value) {
        setOpenSearchBar(false)
      } else {
        setSearchText(ref.current.value)
        navigate('/products')
      }
    }
  }

  return (
    <>
      {openSearchBar ? (
        <form onSubmit={(event) => submitSearchForm(event)}>
          <InputGroup>
            <InputRightElement>
              <Button
                onClick={(e) => submitSearchForm(e)}
                backgroundColor="transparent"
              >
                <BsSearch />
              </Button>
            </InputRightElement>
            <Input
              ref={ref}
              borderRadius={20}
              placeholder="Search Products..."
              variant="filled"
            />
          </InputGroup>
        </form>
      ) : (
        <Button
          onClick={() => setOpenSearchBar(true)}
          backgroundColor="transparent"
        >
          <BsSearch />
        </Button>
      )}
    </>
  )
}

export default SearchInput
