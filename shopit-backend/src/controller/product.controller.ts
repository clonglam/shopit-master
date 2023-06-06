import {
    CreateProductInput,
    DeleteProductInput,
    ListProductsInput,
    GetProductInput,
    UpdateProductInput,
} from "../schema/product"
import { Request, Response } from "express"
import {
    createProduct,
    deleteProduct,
    getProduct,
    listProucts,
    updateProduct,
} from "../service/product.services"
import { Collection, Product } from "@prisma/client"
import { pickBy } from "lodash"

export async function createProductHandler(
    req: Request<{}, {}, CreateProductInput["body"]>,
    res: Response
) {
    try {
        const product = await createProduct(req.body)
        return res.send(product)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function listProductsHandler(
    req: Request<{}, {}, {}, ListProductsInput["query"]>,
    res: Response
) {
    try {
        const moives = await listProucts({
            searchText: req.query.searchText,
            collectionId: Number(req.query.collectionId),
            pageSize: Number(req.query.pageSize)
                ? Number(req.query.pageSize)
                : 10,
            page: Number(req.query.page) ? Number(req.query.page) : 1,
        })
        return res.send(moives)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function getProductHandler(
    req: Request<GetProductInput["params"], {}, {}>,
    res: Response<Product | null>
) {
    try {
        const product = await getProduct(req.params)
        return res.send(product)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function updateProductHandler(
    req: Request<UpdateProductInput["params"], UpdateProductInput["body"]>,
    res: Response<Product>
) {
    try {
        const product = await updateProduct(req.params, req.body)
        return res.send(product)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function deleteProductHandler(
    req: Request<DeleteProductInput["params"]>,
    res: Response
) {
    try {
        const product = await deleteProduct(req.params)
        return res.send(product)
    } catch (err) {
        return res.sendStatus(400)
    }
}
