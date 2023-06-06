import express, { Express } from "express"
import healthCheck from "../routes/healthCheck"

import swaggerDocs from "../utils/swagger"

import collections from "../routes/collections"
import products from "../routes/products"
import cart from "../routes/cart"
import auth from "../routes/auth"
import user from "../routes/user"
import checkout from "../routes/checkout"

export default function (app: Express, port: number) {
    app.use("/api", auth)
    app.use("/api", healthCheck)
    app.use("/api/collections", collections)
    app.use("/api/products", products)
    app.use("/api/cart", cart)
    app.use("/api/user", user)
    app.use("/api/payment", checkout)

    swaggerDocs(app, port)
}
