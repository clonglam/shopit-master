import express from "express"
import passport from "passport"
import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"
import _ from "lodash"
import { generateAuthToken } from "../service/auth.services"
import validateResource from "../middleware/validateResource"
import { loginHandler, signupHandler } from "../controller/auth.controller"
import { loginSchema, signupSchema } from "../schema/auth"

const router = express.Router()
const prisma = new PrismaClient()

router.post("/login", validateResource(loginSchema), loginHandler)

router.post("/signup", validateResource(signupSchema), signupHandler)

router.post("/logout", function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err)
        }
        res.redirect("/")
    })
    res.send("Logged out successfully")
})

export default router
