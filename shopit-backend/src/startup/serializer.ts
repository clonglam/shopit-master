import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import { Express } from "express"

export default function (app: Express) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cookieParser())
}
