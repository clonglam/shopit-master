import { Box, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { AiOutlineCheck, AiOutlineShopping } from 'react-icons/ai'
import { FaShippingFast } from 'react-icons/fa'

const PurchaseIncentives = () => {
  const incentives = [
    {
      id: 1,
      title: 'Free Shipping',
      details: 'Free FedEx ground or freight shipping on most orders over $75!',
      Icon: FaShippingFast,
    },
    {
      id: 2,
      title: 'Price Guarantee',
      details: 'Found a lower price? We will gladly match it.',
      Icon: AiOutlineCheck,
    },
    {
      id: 3,
      title: 'Safe & Secure',
      details: 'Shop with confidence. Your information is safe and secure.',
      Icon: AiOutlineShopping,
    },
  ]

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      marginBottom={8}
      paddingY={8}
    >
      <Text
        textAlign="center"
        textTransform="uppercase"
        fontSize="0.8rem"
        letterSpacing="0.1rem"
        fontWeight="600"
        color="primary.500"
      >
        customer service
      </Text>
      <Heading
        textAlign="center"
        fontSize="5xl"
        fontWeight="300"
        marginBottom={6}
      >{`We've got you covered`}</Heading>

      <SimpleGrid
        width="100%"
        columns={{ base: 1, md: 3 }}
        spacing={2}
        alignItems="start"
      >
        {incentives.map(({ id, Icon, title, details }) => (
          <Stack justifyContent="center" alignItems="center" key={id}>
            <Box
              backgroundColor="gray.300"
              padding={8}
              rounded={1000}
              width="120px"
              height="120px"
              textAlign="center"
              marginBottom={6}
            >
              <Icon size="100%" color="#fff" />
            </Box>

            <Heading fontSize="3xl" fontWeight="200" textAlign="center">
              {title}
            </Heading>
            <Text textAlign="center" fontSize="sm" fontWeight="300">
              {details}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default PurchaseIncentives
