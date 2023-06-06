import {
    CreateCartInput,
    DeleteCartInput,
    // GetCartsInput,
    UpdateCartInput,
} from "../schema/cart"
import { Request, Response } from "express"
import { Cart } from "@prisma/client"
import { GetCartInput } from "../schema/cart"
import { createCart, deleteCart, getCartById } from "../service/cart.services"

export async function createCartHandler(
    req: Request<{}, {}, CreateCartInput["body"]>,
    res: Response
) {
    try {
        const cart = await createCart(req.body)
        return res.send(cart)
    } catch (err) {
        res.status(500).json({
            error: "An error occurred while creating the cart.",
        })
    }
}

export default class CartController {
    public async getCart() {
        return
    }
}

export async function getCartHandler(
    req: Request<GetCartInput["params"], {}, {}>,
    res: Response<Cart | null>
) {
    try {
        const cart = await getCartById(req.params)
        return res.send(cart)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function updateCartHandler(
    req: Request<UpdateCartInput["params"], {}, UpdateCartInput["body"]>,
    res: Response<Cart>
) {
    try {
        // const cart = await updateCart(req.params, req.body)
        // return res.send(cart)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function deleteCartHandler(
    req: Request<DeleteCartInput["params"]>,
    res: Response
) {
    try {
        const cart = await deleteCart(req.params)
        return res.send(cart)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function getCartByUserIdHandler(
    { params }: Request<{ userId: string }, {}, {}>,
    res: Response
) {
    try {
        // const carts = await getCartByUserId({ userId: params.userId })
        // return res.send(carts)
    } catch (err) {
        return res.sendStatus(400)
    }
}
