import { createUserSchema } from "./../schema/user"
import express from "express"

import validateResource from "../middleware/validateResource"
import { createUserHandler } from "../controller/user.controller"
import { getCartByUserIdHandler } from "../controller/cart.controller"

const router = express.Router()

//Get a Cart
router.get("/:userId/cart", getCartByUserIdHandler)

router.post("/", validateResource(createUserSchema), createUserHandler)
export default router
