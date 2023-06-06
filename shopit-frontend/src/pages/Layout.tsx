import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/UI-Components/Footer/Footer'
import NavBanner from '../components/UI-Components/Navigation/NavBanner'
import NavBar from '../components/UI-Components/Navigation/NavBar'

const Layout = () => {
  return (
    <>
      <NavBanner />
      <NavBar />
      <Box backgroundColor="gray.200" minHeight="80vh">
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}

export default Layout
