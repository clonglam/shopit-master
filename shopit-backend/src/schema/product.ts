import * as z from "zod"

const productBody = z.object({
    title: z.string({ required_error: "Product Title is required" }),
    slug: z.string({
        required_error: "Slug is required",
    }),
    description: z.string({
        required_error: "Description is required",
    }),
    SKU: z.string({
        required_error: "SKU is required.",
    }),
    price: z.number({
        required_error: "Price is required.",
    }),
    inventory: z.number({
        required_error: "inventory is required.",
    }),
    gallery: z.array(z.string()).optional(),
    thumbnail: z.string().optional(),
    hoverImage: z.string().optional(),
    collectionIds: z.array(z.number()).optional(),
})

const payload = {
    body: productBody,
}

const params = {
    params: z.object({
        productId: z.string({
            required_error: "Product id is required.",
        }),
    }),
}

const query = {
    query: z.object({
        searchText: z.string().optional(),
        collectionId: z.string().optional(),
        page: z.string().optional(),
        pageSize: z.string().optional(),
    }),
}

export const getProductSchema = z.object({
    ...params,
})

export const listProductsSchema = z.object({
    ...query,
})

export const listProductsByCategorySlugSchema = z.object({
    query: z.object({
        collectionSlug: z.string().optional(),
        page: z.number().optional(),
        pageSize: z.number().optional(),
    }),
})

export const createProductSchema = z.object({
    ...payload,
})

export const updateProductSchema = z.object({
    ...payload,
    ...params,
})

export const deleteProductSchema = z.object({
    ...params,
})

export type GetProductInput = z.TypeOf<typeof getProductSchema>
export type ListProductsInput = z.TypeOf<typeof listProductsSchema>
export type CreateProductInput = z.TypeOf<typeof createProductSchema>
export type UpdateProductInput = z.TypeOf<typeof updateProductSchema>
export type DeleteProductInput = z.TypeOf<typeof deleteProductSchema>
export type ListProductsByCategorySlugInput = z.TypeOf<
    typeof listProductsByCategorySlugSchema
>
