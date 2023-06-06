import { AspectRatio, Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { PromotionCategory } from '../../data/promotionCategories'

type Props = {
  promotion: PromotionCategory
}

const PromotionCard = ({ promotion }: Props) => {
  const { image, title, subtitle, href } = promotion
  return (
    <Box as={Link} to={href} width="100%" backgroundColor="transparent">
      <AspectRatio ratio={4 / 3}>
        <Image src={image} />
      </AspectRatio>
      <Stack justifyContent="center" alignContent="center" paddingY={5}>
        <Text
          letterSpacing={2}
          fontSize="sm"
          textAlign="center"
          textTransform="uppercase"
          color="primary.500"
          fontWeight="600"
        >
          {subtitle}
        </Text>

        <Heading textAlign="center" fontWeight="200" fontSize="2xl">
          {title}
        </Heading>
      </Stack>
    </Box>
  )
}

export default PromotionCard
