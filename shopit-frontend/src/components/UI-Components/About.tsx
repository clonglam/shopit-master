import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Container
      maxW="7xl"
      display="block"
      padding={5}
      position="relative"
      marginTop={6}
    >
      {/* <Box position="relative"> */}
      <AspectRatio
        as={Link}
        to="/about"
        ratio={1 / 1}
        width={{ base: '100%', md: '800px' }}
        marginTop={{ base: '-60px', md: '-68px', lg: '-76px' }}
        display="block"
        position="relative"
      >
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt="Home-page about"
        />
      </AspectRatio>
      {/* </Box> */}

      <Box
        padding={0}
        marginTop={{ base: '-55px', md: '0' }}
        marginX={{ base: 'auto', md: '0' }}
        zIndex="999"
        position={{ base: 'relative', md: 'absolute' }}
        backgroundColor="#fff"
        right={{ base: '0', md: 0 }}
        top={{ base: '0', md: '65px' }}
        width={{ base: '90%', md: '525px' }}
      >
        <Stack
          padding={{ base: '1.5rem', md: '5rem' }}
          justifyContent="center"
          alignItems="center"
        >
          <Text
            letterSpacing={2}
            fontSize={{ base: '12px', md: '15px' }}
            textAlign="center"
            textTransform="uppercase"
            color="primary.500"
            fontWeight="600"
          >
            The Horne Diffrence
          </Text>

          <Heading
            textAlign="center"
            fontWeight="200"
            fontSize={{ base: '38px', md: '42px' }}
          >
            A bit about us
          </Heading>

          <Text fontSize="15px" fontWeight="300" color="#656565">
            {`
            HORNE is your source for authentic modern design. We have searched the
            globe to bring you heirloom-quality, modern design from only the best
            designers, design houses and manufacturers. Whether you are looking
            for a hand-crafted lighting fixture from Serge Mouille (hand-made in
                France since the 1950's), an industrial design from Original BTC
                (manufactured in a Green factory in the UK) or a sophisticated piece
                of wood furniture from Eastvold (handmade in Wisconsin) - HORNE is
                proud to offer only the finest in authentic modern design. What's
                better? We are fanatical about our customer service and modern decor.
                We are always happy to help, no matter the project, and look forward
                to talking with you. Send us an email or give us a call.
                `}
          </Text>
        </Stack>
      </Box>
    </Container>
  )
}

export default About

// https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80
