import { Strategy as LocalStrategy } from "passport-local"
const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt

import bcrypt from "bcryptjs"
import passport from "passport"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
        },
        async (username, password, done) => {
            const user = await prisma.user.findFirst({
                where: { email: username },
            })
            if (!user)
                return done(null, false, {
                    message: "Incorrect username or password.",
                })

            const validPassword = await bcrypt.compare(password, user.password)
            if (!validPassword)
                return done(null, false, {
                    message: "Incorrect username or password.",
                })
            return done(null, user)
        }
    )
)

passport.serializeUser((user: any, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id: number, done) => {
    const user = await prisma.user.findUnique({ where: { id } })
    done(null, user)
})
