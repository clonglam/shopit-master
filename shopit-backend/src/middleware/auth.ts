import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

async function auth(req: Request<any>, res: Response, next: NextFunction) {
    console.log("req.session", req.session)
    const token = req.header("x-auth-token")
    if (!token) return res.status(401).send("Access denied. No token provided.")

    try {
        const jwtPrivateKey = process.env.JWTPRIVATEKEY

        if (!jwtPrivateKey)
            throw new Error("No JWT Private Key, Pls check your .env file. ")

        const decoded = jwt.verify(token, jwtPrivateKey)

        req.user = decoded

        next()
    } catch (ex) {
        res.status(400).send("Invalid token.")
    }
}

export default auth
