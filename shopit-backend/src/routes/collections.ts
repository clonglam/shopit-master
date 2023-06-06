import express from "express"
import {
    createCollectionHandler,
    deleteCollectionHandler,
    getCollectionHandler,
    getCollectionProductsHandler,
    getCollectionsHandler,
    updateCollectionHandler,
} from "../controller/collection.controller"
import validateResource from "../middleware/validateResource"
import {
    createCollectionSchema,
    deleteCollectionSchema,
    getCollectionSchema,
    getCollectionsSchema,
} from "../schema/collection"

const router = express.Router()

router.get(
    "/:collectionId",
    validateResource(getCollectionSchema),
    getCollectionHandler
)
router.get(
    "/:collectionId/products",
    validateResource(getCollectionSchema),
    getCollectionProductsHandler
)

router.get("/", validateResource(getCollectionsSchema), getCollectionsHandler)

router.post(
    "/",
    validateResource(createCollectionSchema),
    createCollectionHandler
)

router.put("/:collectionId", updateCollectionHandler)

router.delete(
    "/:collectionId",
    validateResource(deleteCollectionSchema),
    deleteCollectionHandler
)

export default router
