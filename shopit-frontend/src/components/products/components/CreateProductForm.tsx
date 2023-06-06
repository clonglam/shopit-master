import { Box, Heading, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import Form, {
  SelectInputField,
  SubmitButton,
  TextAreaInputField,
  TextInputField,
} from '../../form'
import Divider from '../../UI-Components/Divider'
import { CreateProduct } from '../hooks/productService'
import useCreateProduct from '../hooks/useCreateProduct'

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
  collectionIds: z.string().optional(),
  hoverImage: z.string().optional(),
  thumbnail: z.string().optional(),
})

type FromData = z.infer<typeof schema>

const CreateProductForm = () => {
  // const { data: collections } = ()
  const navigate = useNavigate()
  const toast = useToast()

  const createProudct = useCreateProduct({
    onAdd: (product) => {
      toast({
        title: 'Success',
        description: `${product.title} is created`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigate('/admin/products')
    },
    onError: (error) => {
      toast({
        title: 'Error.',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    },
  })

  const defaultValues = {
    inventory: 1,
  }

  const onSubmit = (data: FromData) => {
    const { gallery, collectionIds, ...rest } = data

    const createProdutData: CreateProduct = {
      ...rest,
      gallery: gallery?.split(',') || [],
      collectionIds:
        collectionIds?.split(',').map((item) => parseInt(item)) || [],
    }

    createProudct.mutate(createProdutData)

    console.log('createProdutData', createProdutData)
  }

  const labelStyleProps = { fontWeight: '300', fontSize: 'sm' }

  const errorStyleProps = {
    fontWeight: '300',
    fontSize: 'sm',
    color: 'red.400',
  }

  return (
    <Box as="section" id="creat-product-from">
      <Heading
        fontWeight="300"
        textAlign="center"
        fontSize="5xl"
        marginBottom={5}
      >
        Create New Product
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

          <TextInputField
            name="slug"
            label="Slug*"
            placeholder="product-slug"
          />
          {/* 
          <SelectInputField
            name="collectionIds"
            label="Select Collection*"
            options={collections.map(({ title, id }) => {
              return { label: title, value: id }
            })}
          /> */}

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

export default CreateProductForm
