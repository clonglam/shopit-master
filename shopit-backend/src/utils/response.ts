import { Response } from "express"
export type ErrorType = {
    status: number
    message: string
}

export const reponsesFail = (status: number, message: string) => ({
    error: {
        status,
        message,
    },
})

export type ResponseType<T> = {
    body?: T
    error?: ErrorType
}

export const responseHandler = (response: ResponseType<any>, res: Response) => {
    if (response.error)
        res.status(response.error.status).send(response.error.message)
    else {
        return res.status(200).send(response.body)
    }
}
