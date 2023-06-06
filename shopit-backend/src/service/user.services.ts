import {
    CreateUserInput,
    // DeleteUserInput,
    GetUserInput,
    // ListUsersInput,
    // UpdateUserInput,
} from "../schema/user"
import { ResponseType } from "../utils/response"
import { PrismaClient, User } from "@prisma/client"
import { databaseResponseTimeHistogram } from "../utils/metrics"

const prisma = new PrismaClient()

export async function createUser(input: CreateUserInput["body"]) {
    const metricsLabels = {
        operation: "Create User",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const user = await prisma.user.findFirst({
            where: {
                email: input.email,
            },
        })

        if (user) throw new Error("User already registered.")

        const result = await prisma.user.create({
            data: input,
        })
        timer({ ...metricsLabels, success: "true" })
        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function getUserByEmail(email: string) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        })

        return user
    } catch (e) {
        // return {
        //     error: { message: "unexpexcted Error occure at get User By Email" },
        // }
        throw e
    }
}

// export async function getUser({ userId }: GetUserInput["body"]) {
//     const metricsLabels = {
//         operation: "Get User",
//     }
//     console.log("userId", userId)

//     const timer = databaseResponseTimeHistogram.startTimer()

//     try {
//         const user = await prisma.user.findFirst({
//             where: {
//                 slug: userId,
//             },
//             include: { collections: true, inventory: true },
//         })

//         timer({ ...metricsLabels, success: "true" })

//         return user
//     } catch (e) {
//         timer({ ...metricsLabels, success: "false" })
//         throw e
//     }
// }

// export async function listProucts({ query }: ListUsersInput) {
//     console.log("query", query)

//     const { collections } = query

//     const metricsLabels = {
//         operation: "Get Users",
//     }

//     const timer = databaseResponseTimeHistogram.startTimer()

//     try {
//         const result = await prisma.user.findMany({
//             where: {
//                 collections: {
//                     some: {
//                         slug: {
//                             equals: collections,
//                         },
//                     },
//                 },
//             },
//             include: { collections: true, inventory: true },
//         })
//         timer({ ...metricsLabels, success: "true" })
//         return result
//     } catch (e) {
//         timer({ ...metricsLabels, success: "false" })
//         throw e
//     }
// }

// export async function deleteUser({ userId }: DeleteUserInput["params"]) {
//     const metricsLabels = {
//         operation: "Delete User",
//     }

//     const data = {
//         id: parseInt(userId),
//     }

//     const timer = databaseResponseTimeHistogram.startTimer()

//     try {
//         const result = await prisma.user.findFirst({
//             where: { ...data },
//         })

//         timer({ ...metricsLabels, success: "true" })

//         return result
//     } catch (e) {
//         timer({ ...metricsLabels, success: "false" })

//         throw e
//     }
// }

// export async function updateUser(
//     { userId }: UpdateUserInput["params"],
//     body: UpdateUserInput["body"]
// ) {
//     const metricsLabels = {
//         operation: "Update User",
//     }

//     const id = parseInt(userId)
//     const { collectionIds, quantity, ...rest } = body

//     const timer = databaseResponseTimeHistogram.startTimer()

//     try {
//         const result = await prisma.user.update({
//             where: { id },
//             data: {
//                 ...rest,
//                 inventory: { update: { quantity } },
//                 collections: {
//                     connect: collectionIds?.map(collectionId => {
//                         return { id: collectionId }
//                     }),
//                 },
//             },
//         })

//         timer({ ...metricsLabels, success: "true" })

//         return result
//     } catch (e) {
//         timer({ ...metricsLabels, success: "false" })
//         throw e
//     }
// }
