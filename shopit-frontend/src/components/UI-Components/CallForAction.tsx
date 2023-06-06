import { Button, Text } from '@chakra-ui/react'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { CallForActionType } from '../../data/banners'

type Props = {
  href: string
  children: string
  width?: string
}

const CallForAction = ({ href, children, width }: Props) => {
  return (
    <Button
      as={Link}
      to={href}
      border="2px solid"
      borderColor="primary.500"
      paddingY={3}
      paddingX={10}
      width={width || '300px'}
      background="transparent"
      alignItems="center"
      textColor="primary.500"
      marginBottom={5}
      borderRadius={1}
      _hover={{ background: 'primary.500', textColor: '#fff' }}
    >
      <Text fontWeight="700" fontSize="sm" marginRight={3}>
        {children}
      </Text>
      <AiOutlineRight color="primary.500" fontWeight="700" />
    </Button>
  )
}

export default CallForAction
