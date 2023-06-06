import { Request, Response, NextFunction } from "express"
import { AnyZodObject, ZodOptional, ZodError } from "zod"

const validate =
    (schema: AnyZodObject | ZodOptional<AnyZodObject>) =>
    async (req: Request<any>, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync({
                body: req?.body,
                query: req?.query,
                params: req?.params,
            })
            next()
        } catch (error) {
            let err = error
            if (err instanceof ZodError) {
                err = err.issues.map(e => ({
                    path: e.path[0],
                    message: e.message,
                }))
            }
            return res.status(409).json({
                status: "failed",
                error: err,
            })
        }
        // } catch (e: any) {
        //     return res.status(400).send(e.errors)
        // }
    }

export default validate
