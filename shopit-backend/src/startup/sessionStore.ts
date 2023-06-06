import { Express } from "express"
import { createClient } from "redis"

import session from "express-session"
import RedisStore from "connect-redis"

export default function (app: Express) {
    if (!process.env.REDISCLOUD_URL)
        throw new Error("There is no Resiscroud URL")

    let redisClient = createClient({ url: process.env.REDISCLOUD_URL })
    redisClient.connect().catch(console.error)

    app.set("trust proxy", 1)

    if (!process.env.COOKIE_SECRET)
        throw new Error("NO CookieSecret set in .env, pls check")

    // Initialize store.
    let redisStore = new RedisStore({
        client: redisClient,
        prefix: "shopit:",
    })

    // Initialize sesssion storage.
    app.use(
        session({
            store: redisStore,
            secret: process.env.COOKIE_SECRET,
            name: "__shopit_sid",
            resave: false,
            cookie: {
                maxAge: 10000 * 60 * 60 * 24 * 7,
                // sameSite: "lax",
                httpOnly: false,
                secure: process.env.ENVIRONMENT === "production" ? true : false,
                // httpOnly: true,
                // maxAge: 1000 * 4 * 50 * 50 * 24 * 7,
                // sameSite:
                //     process.env.ENVIRONMENT === "production" ? "none" : "lax",
            },
            saveUninitialized: true,
        })
    )
}
