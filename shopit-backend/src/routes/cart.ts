import express from "express"

import {
    createCartHandler,
    deleteCartHandler,
    getCartHandler,
    updateCartHandler,
} from "../controller/cart.controller"

const router = express.Router()

router.get("/:cartId", getCartHandler)
router.post("/", createCartHandler)
router.put("/:cartId", updateCartHandler)
router.delete("/:cartId", deleteCartHandler)

export default router
