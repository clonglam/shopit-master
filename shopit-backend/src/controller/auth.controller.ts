import _ from "lodash"
import { Request, Response } from "express"
import { LoginInput, SigupInput } from "../schema/auth"
import { login, signup } from "../service/auth.services"
import { responseHandler } from "../utils/response"

declare module "express-session" {
    export interface SessionData {
        key: string
        // key: {
        //     userId: number // Add a userId attribute to SessionData
        //     role: "ADMIN" | "USER" // Add a userId attribute to SessionData
        //     email: string // Add a userId attribute to SessionData
        // }
    }
}

export async function loginHandler(
    req: Request<{}, {}, LoginInput["body"]>,
    res: Response
) {
    const { email, password } = req.body

    const response = await login(email, password)
    console.log("response", response)

    if (response.error)
        res.status(response.error.status).send(response.error.message)

    if (response.body) {
        // req.session.key = {
        //     userId: response.body.userId,
        //     email,
        //     role: response.body?.role,
        // }
        // req.sessionStore
        req.session.key = email

        console.log(req.session)
        console.log(res.cookie)
        return res.status(200).send(response.body?.token)
    }
}

export async function signupHandler(
    req: Request<{}, {}, SigupInput["body"]>,
    res: Response
) {
    const data = _.pick(req.body, ["name", "email", "password"])

    const response = await signup(data)

    responseHandler(response, res)
}
