import { Button } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'

import useAdminLayoutStore from '../hooks/useAdminLayoutSore'

const HamburrgerButton = () => {
  const onToggle = useAdminLayoutStore((s) => s.onToggle)
  return (
    <Button
      width="64px"
      height="64px"
      className="nav-toggler"
      variant="link"
      onClick={onToggle}
    >
      <GiHamburgerMenu style={{ display: 'inline' }} size="24px" />
    </Button>
  )
}

export default HamburrgerButton
