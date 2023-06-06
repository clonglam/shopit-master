import prisma from "../libs/prisma"
import {
    CreateProductInput,
    DeleteProductInput,
    GetProductInput,
    ListProductsByCategorySlugInput,
    ListProductsInput,
    UpdateProductInput,
} from "../schema/product"
import { databaseResponseTimeHistogram } from "../utils/metrics"

export async function createProduct(input: CreateProductInput["body"]) {
    const { collectionIds, ...rest } = input

    const metricsLabels = {
        operation: "Create Product",
    }

    const timer = databaseResponseTimeHistogram.startTimer()
    try {
        const result = await prisma.product.create({
            data: {
                ...rest,
            },
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        console.log("error", e)
        throw e
    }
}

export async function getProduct({ productId }: GetProductInput["params"]) {
    const metricsLabels = {
        operation: "Get Product",
    }
    console.log("productId", productId)

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const product = await prisma.product.findFirst({
            where: {
                slug: productId,
            },
            include: {
                collectionsOnProducts: {
                    include: { collection: true },
                },
            },
        })

        timer({ ...metricsLabels, success: "true" })

        return product
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function listProucts({
    searchText,
    collectionId,
    pageSize = 10,
    page = 1,
}: {
    searchText?: string
    collectionId?: number
    pageSize?: number
    page?: number
}) {
    const metricsLabels = {
        operation: "Get Products",
    }

    console.log("pageSize", pageSize)
    console.log("page", page)
    console.log("searchText", searchText)
    console.log("collectionId", collectionId)
    const timer = databaseResponseTimeHistogram.startTimer()

    const conditions = []

    if (searchText !== undefined && searchText !== "") {
        conditions.push({
            OR: [
                {
                    title: {
                        contains: searchText.toLowerCase(),
                    },
                },
                {
                    description: {
                        contains: searchText.toLowerCase(),
                    },
                },
            ],
        })
    }

    // Add category condition if categoryName is not undefined
    if (collectionId !== undefined && !Number.isNaN(collectionId)) {
        // const categoryIdsAsNumbers = categoryIds.map(Number)

        conditions.push({
            collectionsOnProducts: {
                some: {
                    collectionId,
                },
            },
        })
    }

    try {
        const result = await prisma.product.findMany({
            where: {
                AND: conditions,
            },
            include: {
                collectionsOnProducts: {
                    select: {
                        collection: true,
                    },
                },
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
            orderBy: { createdAt: "desc" },
        })
        timer({ ...metricsLabels, success: "true" })
        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function listProuctsFilterWithCollection({
    collectionSlug,
    pageSize = 10,
    page = 1,
}: ListProductsByCategorySlugInput["query"]) {
    const metricsLabels = {
        operation: "List Products by Collection slug",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const collection = await prisma.collection.findUnique({
            where: {
                slug: collectionSlug,
            },
            select: {
                id: true,
            },
        })

        if (!collection) throw new Error("No Collection Found.")

        const result = await prisma.product.findMany({
            where: {
                collectionsOnProducts: {
                    some: { collectionId: collection.id },
                },
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
            orderBy: { createdAt: "desc" },
        })

        timer({ ...metricsLabels, success: "true" })
        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function deleteProduct({
    productId,
}: DeleteProductInput["params"]) {
    const metricsLabels = {
        operation: "Delete Product",
    }

    const data = {
        id: parseInt(productId),
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.product.delete({
            where: { ...data },
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })

        throw e
    }
}

export async function updateProduct(
    { productId }: UpdateProductInput["params"],
    body: UpdateProductInput["body"]
) {
    const metricsLabels = {
        operation: "Update Product",
    }

    const id = parseInt(productId)
    const { collectionIds, ...rest } = body

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.product.update({
            where: { id },
            data: {
                ...rest,
                collectionsOnProducts: {
                    deleteMany: {},

                    createMany: {
                        data:
                            collectionIds?.map(collectionId => {
                                return {
                                    collectionId: collectionId,
                                }
                            }) || [],
                    },
                },
            },
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}
