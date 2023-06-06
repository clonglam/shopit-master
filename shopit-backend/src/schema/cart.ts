import * as z from "zod"

const CreateCartItemType = z.object({
    productId: z.number({ required_error: "CartId is required." }),
    quantity: z.number({ required_error: "Quantity is required." }),
})

const payload = {
    body: z.object({
        userId: z.number({ required_error: "UserId is required." }),
        items: z.array(CreateCartItemType),
    }),
}

const params = {
    params: z.object({
        cartId: z.string({
            required_error: "cartId is required.",
        }),
    }),
}

const query = {
    query: z.object({
        page: z.optional(z.number({})),
        collections: z.string().optional(),
    }),
}

export const getCartSchema = z.object({
    ...params,
})

export const listCartsSchema = z.object({
    ...query,
})

export const createCartItemSchema = z.object({
    ...params,
    body: CreateCartItemType,
})

export const createCartSchema = z.object({
    ...payload,
})

export const updateCartSchema = z.object({
    ...payload,
    ...params,
})

export const deleteCartSchema = z.object({
    ...params,
    ...payload,
})

export type GetCartInput = z.TypeOf<typeof getCartSchema>
export type ListCartsInput = z.TypeOf<typeof listCartsSchema>
export type CreateCartInput = z.TypeOf<typeof createCartSchema>
export type UpdateCartInput = z.TypeOf<typeof updateCartSchema>
export type DeleteCartInput = z.TypeOf<typeof deleteCartSchema>
