import { Request, Response, NextFunction } from "express";

export default function (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (err) res.status(500).send("There something failed.");
}
