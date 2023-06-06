import {
    CreateCollectionInput,
    DeleteCollectionInput,
    GetCollectionInput,
    GetCollectionsInput,
    UpdateCollectionInput,
} from "../schema/collection"
import { PrismaClient } from "@prisma/client"
import { databaseResponseTimeHistogram } from "../utils/metrics"

const prisma = new PrismaClient()

export async function createCollection(data: CreateCollectionInput["body"]) {
    const metricsLabels = {
        operation: "Create Collection",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.collection.create({
            data,
        })

        timer({ ...metricsLabels, success: "true" })
        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function getCollection({
    collectionId,
}: GetCollectionInput["params"]) {
    const metricsLabels = {
        operation: "Get Collection",
    }

    const data = {
        id: parseInt(collectionId),
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const collection = await prisma.collection.findUnique({
            where: data,
            include: { products: true },
        })

        timer({ ...metricsLabels, success: "true" })

        return collection
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function getCollectionProducts({
    collectionId,
}: GetCollectionInput["params"]) {
    const metricsLabels = {
        operation: "Get Collection",
    }

    const data = {
        id: parseInt(collectionId),
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const collection = await prisma.collection.findUnique({
            where: data,

            include: { products: { include: { product: true } } },
        })

        timer({ ...metricsLabels, success: "true" })

        return collection?.products.map(({ product }) => product)
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function listCollections({ query }: GetCollectionsInput) {
    console.log("query", query)

    const metricsLabels = {
        operation: "Get Collections",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.collection.findMany({
            orderBy: {
                id: "asc",
            },
        })
        timer({ ...metricsLabels, success: "true" })
        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function deleteCollection({
    collectionId,
}: DeleteCollectionInput["params"]) {
    const metricsLabels = {
        operation: "Delete Collection",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.collection.findFirst({
            where: { id: parseInt(collectionId) },
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })

        throw e
    }
}

export async function updateCollection(
    { collectionId }: UpdateCollectionInput["params"],
    body: UpdateCollectionInput["body"]
) {
    const metricsLabels = {
        operation: "Update Collection",
    }
    const id = parseInt(collectionId)

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.collection.update({
            where: { id },
            data: body,
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}
