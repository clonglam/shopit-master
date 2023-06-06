import { Prisma } from "@prisma/client"
import * as z from "zod"

const payload = {
    body: z.object({
        title: z.string({ required_error: "Collection Title is required" }),
        slug: z.string({
            required_error: "Slug is required",
        }),
        description: z.string({
            required_error: "Description is required",
        }),
        thumbnail: z.string({
            required_error: "Thumbnail is required",
        }),
    }) satisfies z.ZodType<Prisma.CollectionCreateInput>,
}

const params = {
    params: z.object({
        collectionId: z.string({
            required_error: "Collection id is required.",
        }),
    }),
}

const query = {
    query: z.object({
        page: z.optional(z.number({})),
    }),
}

export const getCollectionSchema = z.object({
    ...params,
})

export const getCollectionsSchema = z.object({
    ...query,
})

export const createCollectionSchema = z.object({
    ...payload,
})

export const updateCollectionSchema = z.object({
    ...payload,
    ...params,
})

export const deleteCollectionSchema = z.object({
    ...params,
    ...payload,
})

export type GetCollectionInput = z.TypeOf<typeof getCollectionSchema>
export type GetCollectionsInput = z.TypeOf<typeof getCollectionsSchema>
export type CreateCollectionInput = z.TypeOf<typeof createCollectionSchema>
export type UpdateCollectionInput = z.TypeOf<typeof updateCollectionSchema>
export type DeleteCollectionInput = z.TypeOf<typeof deleteCollectionSchema>
