import { Request, Response, NextFunction } from "express"

type ValidatorType<T> = (item: T) => T

const validate = (validator: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = validator(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        next()
    }
}
