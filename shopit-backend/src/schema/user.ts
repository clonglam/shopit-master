import * as z from "zod"

const UserBody = z.object({
    email: z.string({ required_error: "Email is required" }),
    name: z.string({
        required_error: "Name is required",
    }),
    password: z.string({
        required_error: "Password is required",
    }),
})

const payload = {
    body: UserBody,
}

// const params = {
//     params: z.object({
//         productId: z.string({
//             required_error: "Product id is required.",
//         }),
//     }),
// }

export const getUserSchema = z.object({
    UserBody,
})

// export const listProductsSchema = z.object({
//     ...query,
// })

export const createUserSchema = z.object({
    ...payload,
})

// export const updateProductSchema = z.object({
//     ...payload,
//     ...params,
// })

// export const deleteProductSchema = z.object({
//     ...params,
//     ...payload,
// })

export type GetUserInput = z.TypeOf<typeof getUserSchema>
// export type ListProductsInput = z.TypeOf<typeof listProductsSchema>
export type CreateUserInput = z.TypeOf<typeof createUserSchema>
// export type UpdateProductInput = z.TypeOf<typeof updateProductSchema>
// export type DeleteProductInput = z.TypeOf<typeof deleteProductSchema>
