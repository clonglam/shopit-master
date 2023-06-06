import { Product } from '../components/products/hooks/productService'

const products: Product[] = [
  {
    id: 2,
    title: 'Bell Pendant',
    slug: 'bell-pandant',
    description:
      '\n            <p>The expression is robust, the form is simple. Bell is a ceiling lamp in an iconic bell shape and with special attention paid to its details. Its round, even surface gives the lamp the impression of having been cast. Rather than being hidden, the meeting between the lead and the lamp is accentuated in a modern and original way.</p \n\n            <p>In Bell you have a lamp where the connection between the lead and the lamp is evident. Just as light is a gatherer, the bell has historically been used to call people to come together - to gather people. With its bell shape, Bell can also be used to create a cozy place to gather in the room.</p>',
    price: 524,
    SKU: 'F145251125',
    gallery: [
      'https://cdn.shopify.com/s/files/1/1087/6904/products/bell-pendant-717449_1400x.jpg?v=1678745777',
      'https://cdn.shopify.com/s/files/1/1087/6904/products/bell-pendant-717449.jpg?v=1678745777',
    ],
    hoverImage:
      'https://cdn.shopify.com/s/files/1/1087/6904/products/bell-pendant-573200_1400x.jpg?v=1678745777',
    thumbnail:
      'https://cdn.shopify.com/s/files/1/1087/6904/products/bell-pendant-717449_1400x.jpg?v=1678745777',
    inventory: 300,
    createdAt: '2023-06-06T04:59:04.483Z',
    updatedAt: '2023-06-06T04:59:04.483Z',
    deletedAt: null,
    collectionsOnProducts: [],
  },
  {
    id: 1,
    title: 'Air Sideboard Low',
    slug: 'air-sideboard-low',
    description:
      '<p> Air is a sideboard for the centre of the room. It combines a graphic pattern of ribs with natural cane inlays which gives a feeling of lightness and transparency. Air can be used as freestanding room dividers or placed against a wall.</p>\n                        <p>The woven cane gives it a visible surface, but also provides a sense of depth. You can glimpse what’s inside, adding some careful mystery to the piece. The fact that the design is transparent also fulfils a function. The woven cane ventilates the cupboard which is practical when storing both clothes and electronic devices. A lamp behind the see-through doors makes Air shine like a diamond.</p>',
    price: 4205,
    SKU: 'F14525123',
    gallery: [
      'https://cdn.shopify.com/s/files/1/1087/6904/products/air-sideboard-low-617050_large.jpg?v=1678825239',
      'https://cdn.shopify.com/s/files/1/1087/6904/products/air-sideboard-low-824028_1400x.jpg?v=1678744396',
      'https://cdn.shopify.com/s/files/1/1087/6904/products/air-sideboard-low-421240_1400x.jpg?v=1678744396',
      'https://cdn.shopify.com/s/files/1/1087/6904/products/air-sideboard-low-980473_1400x.jpg?v=1678744396',
    ],
    hoverImage:
      'https://cdn.shopify.com/s/files/1/1087/6904/products/air-sideboard-low-824028_1400x.jpg?v=1678744396',
    thumbnail:
      'https://cdn.shopify.com/s/files/1/1087/6904/products/air-sideboard-low-617050_large.jpg?v=1678825239',
    inventory: 6,
    createdAt: '2023-06-06T04:59:03.664Z',
    updatedAt: '2023-06-06T04:59:03.664Z',
    deletedAt: null,
    collectionsOnProducts: [
      {
        collectionId: 1,
        collection: {
          id: 1,
          title: 'Lighting',
          slug: 'lighting',
          description:
            '\n                            Transform the way your ceilings and rooms are illuminated with modern ceiling light options from HORNE. This highly curated gallery of ceiling light fixtures will brighten, embolden, and maximize your space with a touch of modernity and minimalism. As homeowners and designers know, the right ceiling light can usher in a completely new atmosphere into a room, so finding the one that brings the most out of your space is crucial. HORNE offers designs for contemporary ceiling lighting that span a world of inspiration, from pieces like the daring and unique 2 Arm Mobile Light to updated takes on traditional options. No matter how far you’re wanting to take your modern ceiling lights, this collection is full of answers for every space and home. Elevate your room, studio, or workspace with a minimalist ceiling light from HORNE.\n                            ',
          thumbnail:
            'cdn.shopify.com/s/files/1/1087/6904/collections/ceiling-lights-279305_2000x.png?v=1678747938',
          featureProductId: null,
          createdAt: '2023-06-06T04:59:03.664Z',
        },
        productId: 1,
      },
    ],
  },
]

export default products
