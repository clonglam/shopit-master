import helmet from "helmet"
import Debug from "debug"
import express from "express"
import routers from "./startup/routes"
import sessionStore from "./startup/sessionStore"
import cors from "./startup/cors"

import morgan from "morgan"
import serializer from "./startup/serializer"

const debug = Debug("app:startup")
const app = express()

const port = Number(process.env.PORT) || 6000

app.use(helmet())
app.use(morgan("tiny"))
sessionStore(app)
cors(app)
serializer(app)

app.use(express.static("public"))

app.listen(port, () => {
    debug("Application started")
    console.log(`Server started at http://localhost:${port}`)
    routers(app, port)
})

export default app
