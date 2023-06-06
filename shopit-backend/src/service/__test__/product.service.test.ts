import { expect, test, vi } from "vitest"
import { createProduct } from "../product.services"
import prisma from "../../libs/__mocks__/prisma"

vi.mock("../libs/prisma")

test("should create new Product ", async () => {
    const currentDateTime = new Date()

    const newProduct = {
        title: "Bell Pendant",
        slug: "bell-pandant2",
        description: `
            <p>The expression is robust, the form is simple. Bell is a ceiling lamp in an iconic bell shape and with special attention paid to its details. Its round, even surface gives the lamp the impression of having been cast. Rather than being hidden, the meeting between the lead and the lamp is accentuated in a modern and original way.</p \n
            <p>In Bell you have a lamp where the connection between the lead and the lamp is evident. Just as light is a gatherer, the bell has historically been used to call people to come together - to gather people. With its bell shape, Bell can also be used to create a cozy place to gather in the room.</p>`,
        price: 524,
        SKU: "F145251125",
        gallery: [
            "https://cdn.shopify.com/s/files/1/1087/6904/products/bell-pendant-717449_1400x.jpg?v=1678745777",
            "https://cdn.shopify.com/s/files/1/1087/6904/products/bell-pendant-717449.jpg?v=1678745777",
        ],
        thumbnail:
            "https://cdn.shopify.com/s/files/1/1087/6904/products/bell-pendant-717449_1400x.jpg?v=1678745777",
        hoverImage:
            "https://cdn.shopify.com/s/files/1/1087/6904/products/bell-pendant-573200_1400x.jpg?v=1678745777",
        inventory: 300,
    }

    prisma.product.create.mockResolvedValue({
        ...newProduct,
        id: 18,
        createdAt: currentDateTime,
        updatedAt: currentDateTime,
        deletedAt: null,
    })

    const product = await createProduct(newProduct)
    console.log("newProudct", newProduct)
    console.log("product", product)
    expect(product).toStrictEqual({
        ...newProduct,
        id: 18,
        createdAt: currentDateTime,
        updatedAt: currentDateTime,
        deletedAt: null,
    })
})

// describe("Product Service", () => {
//     beforeEach(() => {
//         jest.clearAllMocks()
//     })

//     afterAll(async () => {
//         await prisma.$disconnect()
//     })

//     it("should create new Product ", async () => {
//         const mockCreate = jest.fn().mockResolvedValue({})
//         const mockFindMany = jest
//             .fn()
//             .mockResolvedValue([])(prisma.product.create as jest.Mock)
//             .mockImplementation(mockCreate)(
//                 prisma.collection.findMany as jest.Mock
//             )
//             .mockImplementation(mockFindMany)

//         const input = {
//             title: "Product Title",
//             slug: "product-slug",
//             description: "This is a product description",
//             price: 300.24,
//             SKU: "PS1525",
//             gallery: ["https://imageURL", "imageurl2"],
//             hoverImage: "https://imageURL",
//             thumbnail: "https://imageURL",
//             inventory: 55,
//         }

//         const result = await createProduct(input)

//         expect(mockCreate).toHaveBeenCalledWith({
//             data: {
//                 name: "Test Product",
//                 collectionsOnProducts: {
//                     createMany: {
//                         data: [
//                             { collectionId: 1 },
//                             { collectionId: 2 },
//                             { collectionId: 3 },
//                         ],
//                     },
//                 },
//                 // Add other properties based on input
//             },
//         })
//         expect(result).toEqual({}) // Adjust the expected result as needed
//         expect(mockFindMany).toHaveBeenCalledWith({
//             where: {
//                 id: { in: [1, 2, 3] },
//             },
//         })
//         //     prismaMock.product.create.mockResolvedValue(product)

//         //     await expect(createProduct(product)).resolves.toEqual({
//         //         id: 1,
//         //         title: "Product Title",
//         //         slug: "product-slug",
//         //         description: "This is a product description",
//         //         price: 300.24,
//         //         SKU: "PS1525",
//         //         gallery: ["https://imageURL", "imageurl2"],
//         //         hoverImage: "https://imageURL",
//         //         thumbnail: "https://imageURL",
//         //         inventory: 55,
//         //     })
//     })
// })
