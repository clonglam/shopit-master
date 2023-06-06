import express from "express"
import { Request, Response } from "express"
import { checkoutHandler } from "../controller/checkout.controller"

const router = express.Router()

router.post("/create-checkout-session", checkoutHandler)

export default router
