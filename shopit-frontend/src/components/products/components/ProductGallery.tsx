import { Box, Grid, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

interface Props {
  gallery: string[]
}

const ProductGallery = ({ gallery }: Props) => {
  const [imageIndex, setImageIndex] = useState(0)
  const prevImage = () => {
    setImageIndex(imageIndex != 0 ? imageIndex - 1 : gallery.length - 1)
  }
  const nextImage = () => {
    setImageIndex(imageIndex != gallery.length - 1 ? imageIndex + 1 : 0)
  }

  return (
    <Box>
      <GalleryPreviewThumbnailGrid
        gallery={gallery}
        onClick={(index: number) => setImageIndex(index)}
        selecetedImage={imageIndex}
      />

      <ProductImage
        prevImage={prevImage}
        nextImage={nextImage}
        gallery={gallery}
        selectedImageIdx={imageIndex}
      />
    </Box>
  )
}

interface IGalleryuPreviewThumbnail {
  gallery: string[]
  onClick: (index: number) => void
  selecetedImage: number
}

const GalleryPreviewThumbnailGrid = ({
  gallery,
  onClick,
  selecetedImage,
}: IGalleryuPreviewThumbnail) => {
  return (
    <Grid
      templateColumns={{ base: '1fr 1fr 1fr 1fr', md: '120px' }}
      padding={1}
      verticalAlign="top"
      display={{ base: 'grid', md: 'inline-block' }}
    >
      {gallery.map((image, index) => (
        <Box key={index} padding={3} width="120px">
          <Image
            src={image}
            objectFit="contain"
            onClick={() => onClick(index)}
            borderColor="primary.500"
            border={selecetedImage === index ? '0.5px solid' : ''}
          />
        </Box>
      ))}
    </Grid>
  )
}

interface IProductImage {
  prevImage: () => void
  nextImage: () => void
  gallery: string[]
  selectedImageIdx: number
}
const ProductImage = ({
  prevImage,
  nextImage,
  gallery,
  selectedImageIdx,
}: IProductImage) => {
  return (
    <Box
      display="inline-block"
      position="relative"
      overflow="hidden"
      minHeight="0"
      width={{ base: '100%', md: '66.66%' }}
    >
      <SelectorButtonPrev onClick={() => prevImage()} />
      <SelectorButtonNext onClick={() => nextImage()} />

      <Image
        src={gallery[selectedImageIdx]}
        objectFit="cover"
        width="100%"
      ></Image>
    </Box>
  )
}

const SelectorButtonNext = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box position="absolute" top="50%" right="0" zIndex={99} onClick={onClick}>
      <AiOutlineRight size="50px" />
    </Box>
  )
}

const SelectorButtonPrev = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box position="absolute" top="50%" left="0" zIndex={99} onClick={onClick}>
      <AiOutlineLeft size="50px" />
    </Box>
  )
}

export default ProductGallery
