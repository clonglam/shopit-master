import { Box, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import useCollections from '../../collections/hooks/useCollections'
import Form, {
  SubmitButton,
  TextAreaInputField,
  TextInputField,
} from '../../form'
import AutoComplete from '../../form/AutoComplete'
import Divider from '../../UI-Components/Divider'
import { Product, UpdateProduct } from '../hooks/productService'
import useUpdateProduct from '../hooks/useUpdateProduct'

const schema = z.object({
  title: z
    .string()
    .max(255, 'Product Title should not longer than 255 letter')
    .nonempty('Product Title is required.'),
  slug: z
    .string()
    .max(255, 'Slug should not longer than 255 letter')
    .nonempty('Slug is required.'),
  description: z
    .string()
    .nonempty('Description is required')
    .max(1024, 'Description should not longer than 1024 letter'),
  price: z
    .number()
    .multipleOf(0.01, 'Product price should have only 2 decimal places.')
    .min(0, 'Product price should larger than 0.')
    .max(999999, 'Product price should not larger than 999999.'),
  SKU: z
    .string()
    .min(1, 'SKU should longer than 1')
    .max(255, 'SKU should not longer than 255.'),
  inventory: z.number().min(0),
  gallery: z.string().optional(),
  collectionIds: z.array(z.number()).optional(),
  hoverImage: z.string().optional(),
  thumbnail: z.string().optional(),
})

type FromData = z.infer<typeof schema>

interface Props {
  product: Product
}

const EditProductForm = ({ product }: Props) => {
  const { data: collections } = useCollections()
  const navigate = useNavigate()

  console.log('product', product)

  const updateProduct = useUpdateProduct(() => {
    console.log('Success')
    navigate('/admin/products')
  }, product.id)

  const defaultValues = {
    ...product,
    gallery: product.gallery.toString(),
    collectionIds:
      product?.collectionsOnProducts?.map(({ collection }) => collection.id) ||
      [],
  }

  const onSubmit = (data: FromData) => {
    const { gallery, collectionIds, ...rest } = data

    const updateProjectData: UpdateProduct = {
      ...rest,
      collectionIds,
      gallery: gallery?.split(',') || [],
    }

    updateProduct.mutate(updateProjectData)

    console.log('createProdutData', data)
  }

  const labelStyleProps = { fontWeight: '300', fontSize: 'sm' }

  const errorStyleProps = {
    fontWeight: '300',
    fontSize: 'sm',
    color: 'red.400',
  }

  return (
    <Box>
      <Heading
        fontWeight="300"
        textAlign="center"
        fontSize="5xl"
        marginBottom={5}
      >
        Edit Product Detail
      </Heading>

      <Box bgColor="#fff" paddingY={8} paddingX={5}>
        <Form
          onSubmit={onSubmit}
          defaultValues={defaultValues}
          schema={schema}
          labelStyleProps={labelStyleProps}
          errorStyleProps={errorStyleProps}
        >
          <TextInputField
            name="title"
            label="Title*"
            placeholder="Product Title"
          />

          <AutoComplete
            name="collectionIds"
            label="Collection*"
            placeholder="Search Collections ..."
            selections={collections?.map(({ id, title }) => {
              return { id: `${id}`, title, value: id }
            })}
          />

          <TextInputField
            name="slug"
            label="Slug*"
            placeholder="product-slug"
          />

          <TextAreaInputField
            name="description"
            label="Description*"
            placeholder="A brief description of the product."
          />

          <TextInputField
            name="price"
            label="Product Price*"
            registerOption={{ valueAsNumber: true }}
            placeholder="6835.25"
            startWith="$"
          />

          <TextInputField name="SKU" label="SKU*" placeholder="P356103" />

          <TextInputField
            name="inventory"
            label="Inventory*"
            registerOption={{ valueAsNumber: true }}
            placeholder="36"
          />

          <TextAreaInputField
            name="gallery"
            label="Gallery*"
            placeholder={`https://image1.com, https://image2.com, https://image3.com `}
          />

          <TextInputField
            name="hoverImage"
            label="Hover Image"
            placeholder="https://"
          />

          <TextInputField
            name="thumbnail"
            label="Thumbnail"
            placeholder="https://"
          />

          <Divider marginTop={8} marginBottom={3} />

          <SubmitButton />
        </Form>
      </Box>
    </Box>
  )
}

export default EditProductForm
