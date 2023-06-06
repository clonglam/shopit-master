import { Heading, Stack, Text } from '@chakra-ui/react'

type Props = {
  subtitle: string
  title: string
  capitalize?: boolean
}

const SectionTitle = ({ subtitle, title, capitalize }: Props) => {
  return (
    <Stack justifyContent="center" alignContent="center" paddingY={5}>
      <Text
        letterSpacing={2}
        fontSize="sm"
        textAlign="center"
        // textTransform="capitalize"
        textTransform={capitalize ? 'capitalize' : 'uppercase'}
        color="primary.500"
        fontWeight="300"
      >
        {subtitle}
      </Text>

      <Heading textAlign="center" fontWeight="200" fontSize="5xl">
        {title}
      </Heading>
    </Stack>
  )
}

export default SectionTitle
