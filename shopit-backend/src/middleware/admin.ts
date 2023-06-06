import { Request, Response, NextFunction } from "express"

interface AdminMiddleWare extends Request {
    user?: { role: "ADMIN" | "USER" }
}

async function admin(req: AdminMiddleWare, res: Response, next: NextFunction) {
    if (!req.user || req.user.role !== "ADMIN")
        return res.status(403).send("Access denied.")

    next()
}

export default admin
