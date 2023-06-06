import {
    CreateCollectionInput,
    DeleteCollectionInput,
    GetCollectionsInput,
    UpdateCollectionInput,
} from "../schema/collection"
import { Request, Response } from "express"
import { Collection, Product } from "@prisma/client"
import { GetCollectionInput } from "../schema/collection"
import {
    createCollection,
    deleteCollection,
    getCollection,
    listCollections,
    updateCollection,
    getCollectionProducts,
} from "../service/collection.services"

export async function createCollectionHandler(
    req: Request<{}, {}, CreateCollectionInput["body"]>,
    res: Response
) {
    try {
        const collection = await createCollection(req.body)
        return res.send(collection)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function getCollectionsHandler(
    req: Request<{}, {}, GetCollectionsInput["query"]>,
    res: Response
) {
    try {
        const collections = await listCollections(req)
        return res.send(collections)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function getCollectionHandler(
    req: Request<GetCollectionInput["params"], {}, {}>,
    res: Response<Collection | null>
) {
    try {
        const collection = await getCollection(req.params)
        return res.send(collection)
    } catch (err) {
        return res.sendStatus(400)
    }
}
export async function getCollectionProductsHandler(
    req: Request<GetCollectionInput["params"], {}, {}>,
    res: Response<Product[] | null | undefined>
) {
    try {
        const products = await getCollectionProducts(req.params)
        return res.send(products)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function updateCollectionHandler(
    req: Request<
        UpdateCollectionInput["params"],
        UpdateCollectionInput["body"]
    >,
    res: Response<Collection>
) {
    try {
        const collection = await updateCollection(req.params, req.body)
        return res.send(collection)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function deleteCollectionHandler(
    req: Request<DeleteCollectionInput["params"]>,
    res: Response
) {
    try {
        const collection = await deleteCollection(req.params)
        return res.send(collection)
    } catch (err) {
        return res.sendStatus(400)
    }
}
