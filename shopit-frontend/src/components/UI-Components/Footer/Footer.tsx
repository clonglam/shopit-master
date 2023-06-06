import { Box, Grid, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import ContactInfo from '../ContactInfo'
import FooterTitle from './FooterTitle'
import MailChainForm from './MailChainForm'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <Grid
      paddingX={5}
      paddingY={8}
      width="100%"
      borderTop="1px Solid"
      borderColor="primary.500"
      bgColor="gray.200"
      templateColumns={{ base: '1', md: '55% 45%' }}
    >
      <SimpleGrid width="100%" columns={3}>
        {footerSection.map(({ section, children }) => (
          <Box key={section}>
            <FooterTitle>{section}</FooterTitle>

            <Stack paddingY="1rem">
              {children.map(({ label, href }, index) => (
                <Text
                  fontWeight="300"
                  color="gray.600"
                  as={Link}
                  to={href}
                  key={`${label}_${index}`}
                >
                  {label}
                </Text>
              ))}
            </Stack>
          </Box>
        ))}

        <Box>
          <FooterTitle>Need Help</FooterTitle>
          <ContactInfo />
        </Box>
      </SimpleGrid>

      <Stack width="60%">
        <MailChainForm />
        <SocialMedia />
      </Stack>
    </Grid>
  )
}

const footerSection = [
  {
    section: 'Customer Service',
    children: [
      {
        label: 'Free shipping + Returns',
        href: '',
      },
      {
        label: 'Start a Return',
        href: '',
      },
      {
        label: 'Return Policy',
        href: '',
      },
      {
        label: 'FAQS',
        href: '',
      },
      {
        label: 'Contact Us',
        href: '',
      },
    ],
  },
  {
    section: 'About Us',
    children: [
      {
        label: 'About Hugo Lam',
        href: '',
      },
      {
        label: 'Journal',
        href: '',
      },
      {
        label: 'Testimonials',
        href: '',
      },
    ],
  },
]
export default Footer
