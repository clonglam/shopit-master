import cors from "cors"
import { Express } from "express"

export default function (app: Express) {
    const corsOptions = {
        origin: process.env.FRONTENDDOMAIN || "http://localhost:5173",
        credentials: true, //access-control-allow-credentials:true
        optionSuccessStatus: 200,
    }
    app.use(cors(corsOptions))
}
