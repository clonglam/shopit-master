import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Show,
  Stack,
} from '@chakra-ui/react'

import { Banner } from '../../data/banners'
import CallForAction from './CallForAction'
import DescriptionText from './DescriptionText'
import SectionTitle from './SectionTitle'
import SubTitle from './SubTitle'

interface Props {
  banner: Banner
}

const HeroBanner = ({ banner }: Props) => {
  if (!banner)
    return (
      <Box
        width="100%"
        bgColor="#fff"
        minHeight={{ sm: '200px', md: '300px' }}
      ></Box>
    )

  return (
    <Box as="section" bgColor="#fff" width="100%">
      <Show below={'md'}>
        <Stack alignItems="center" gap={5} paddingY={10}>
          <Image
            height="80%"
            src={banner.image}
            objectFit="scale-down"
            alt="hero-banner-image"
          />

          <SectionTitle
            subtitle={banner.headline}
            title={banner.amplify || ''}
          />

          <Box
            borderBottom="2px solid"
            borderColor="gray.400"
            width="80px"
            marginY={3}
          />

          <CallForAction href={banner.callForAction.href}>
            {banner.callForAction.text}
          </CallForAction>
        </Stack>
      </Show>

      <Show above="md">
        <HStack
          as={Container}
          maxW="8xl"
          paddingX="200px"
          paddingY={5}
          minHeight="75vh"
          alignItems="center"
          overflow="hidden"
          height={{ sm: '400px', md: '600px' }}
        >
          <Stack zIndex={99} gap={3}>
            <SubTitle>{banner.headline}</SubTitle>
            <Heading fontSize="7xl" fontWeight="100" color="gray.800">
              {banner.amplify || ''}
            </Heading>

            <Box
              borderBottom="3px solid"
              borderColor="gray.400"
              width="80px"
              marginY={3}
            />

            <DescriptionText>{banner.subtitle}</DescriptionText>

            <CallForAction href={banner.callForAction.href}>
              {banner.callForAction.text}
            </CallForAction>
          </Stack>

          <Image
            height="80%"
            src={banner.image}
            objectFit="scale-down"
            alt="hero-banner-image"
          />
        </HStack>
      </Show>
    </Box>
  )
}

interface IMobileHeroBanner {
  banner: Banner
}

export const MobileHeroBanner = ({ banner }: IMobileHeroBanner) => {
  return (
    <Stack alignItems="center" gap={5} paddingY={10}>
      <Image
        height="80%"
        src={banner.image}
        objectFit="scale-down"
        alt="hero-banner-image"
      />

      <SectionTitle subtitle={banner.headline} title={banner.amplify || ''} />

      <Box
        borderBottom="2px solid"
        borderColor="gray.400"
        width="80px"
        marginY={3}
      />

      <CallForAction href={banner.callForAction.href}>
        {banner.callForAction.text}
      </CallForAction>
    </Stack>
  )
}
export default HeroBanner
