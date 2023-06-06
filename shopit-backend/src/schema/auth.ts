import * as z from "zod"

const LoginBody = z.object({
    email: z.string({ required_error: "Email is required" }),
    password: z.string({
        required_error: "Password is required",
    }),
})

export const loginSchema = z.object({
    body: LoginBody,
})

export const signupSchema = z.object({
    body: z.object({
        email: z.string({ required_error: "Email is required" }),
        name: z.string({ required_error: "Name is required." }),
        password: z.string({
            required_error: "Password is required",
        }),
    }),
})

// export const updateProductSchema = z.object({
//     ...payload,
//     ...params,
// })

// export const deleteProductSchema = z.object({
//     ...params,
//     ...payload,
// })

export type LoginInput = z.TypeOf<typeof loginSchema>
export type SigupInput = z.TypeOf<typeof signupSchema>
// export type ListProductsInput = z.TypeOf<typeof listProductsSchema>
// export type UpdateProductInput = z.TypeOf<typeof updateProductSchema>
// export type DeleteProductInput = z.TypeOf<typeof deleteProductSchema>
