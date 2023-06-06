import { Request, Response } from "express"
import {
    CheckoutSessionProdut,
    createCheckoutSession,
} from "../service/checkout.services"

export async function checkoutHandler(
    req: Request<{}, {}, { order: CheckoutSessionProdut[] }>,
    res: Response
) {
    try {
        const { order } = req.body
        const result = await createCheckoutSession(order)

        res.json(result) // <-- this is the changed line
    } catch (err) {
        return res.sendStatus(400)
    }
}
