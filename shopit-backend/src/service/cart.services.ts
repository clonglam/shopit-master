import {
    CreateCartInput,
    DeleteCartInput,
    GetCartInput,
    UpdateCartInput,
} from "../schema/cart"
import { PrismaClient } from "@prisma/client"
import { databaseResponseTimeHistogram } from "../utils/metrics"

const prisma = new PrismaClient()

export async function createCart(input: CreateCartInput["body"]) {
    const { userId, items } = input

    const metricsLabels = {
        operation: "Create Cart",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.cart.create({
            data: {},
            // include: { items: true }, // Include the created cart items in the response
        })
        timer({ ...metricsLabels, success: "true" })
        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function getCartById({ cartId }: GetCartInput["params"]) {
    const metricsLabels = {
        operation: "Get Cart",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const cart = await prisma.cart.findUnique({
            where: {
                id: parseInt(cartId),
            },
        })

        timer({ ...metricsLabels, success: "true" })

        return cart
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

// export async function getCartByUserId({ userId }: { userId: string }) {
//     const metricsLabels = {
//         operation: "Get Cart By UserId",
//     }

//     const timer = databaseResponseTimeHistogram.startTimer()

//     try {
//         const cart = await prisma.cart.findUnique({
//             where: {
//                 userId: parseInt(userId),
//             },
//             include: {
//                 items: {
//                     include: {
//                         product: true,
//                     },
//                 },
//             },
//         })

//         timer({ ...metricsLabels, success: "true" })

//         return cart
//     } catch (e) {
//         timer({ ...metricsLabels, success: "false" })
//         throw e
//     }
// }

export async function deleteCart({ cartId }: DeleteCartInput["params"]) {
    const metricsLabels = {
        operation: "Delete Cart",
    }

    const data = {
        id: parseInt(cartId),
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.cart.findFirst({
            where: { ...data },
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })

        throw e
    }
}

// export async function updateCart(
//     { cartId }: UpdateCartInput["params"],
//     body: UpdateCartInput["body"]
// ) {
//     const id = parseInt(cartId)
//     const { userId, items } = body

//     const metricsLabels = {
//         operation: "Update Cart",
//     }

//     const timer = databaseResponseTimeHistogram.startTimer()

//     try {
//         const result = await prisma.cart.update({
//             where: { id },
//             data: {
//                 user: { connect: { id: userId } }, // Connect the cart to the user by their ID
//                 items: {
//                     // Update or create the cart items
//                     upsert: items.map(item => ({
//                         where: {
//                             cartId_productId: {
//                                 productId: item.productId,
//                                 cartId: id,
//                             },
//                         },
//                         create: {
//                             productId: item.productId,
//                             quantity: item.quantity,
//                             cartId: id,
//                         },
//                         update: { quantity: item.quantity },
//                     })),
//                 },
//             },
//             include: { items: true }, // Include the updated items in the response
//         })

//         timer({ ...metricsLabels, success: "true" })

//         return result
//     } catch (e) {
//         timer({ ...metricsLabels, success: "false" })
//         throw e
//     }
// }
