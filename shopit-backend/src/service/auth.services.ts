import { Prisma, PrismaClient, User } from "@prisma/client"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { reponsesFail, ResponseType } from "../utils/response"
import { databaseResponseTimeHistogram } from "../utils/metrics"
import { createUser, getUserByEmail } from "./user.services"
import { pick } from "lodash"
const prisma = new PrismaClient()

export async function authUser(email: string, password: string) {
    const metricsLabels = {
        operation: "Auth User",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        timer({ ...metricsLabels, success: "true" })
        // return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function signup(
    data: Prisma.UserCreateInput
): Promise<ResponseType<string>> {
    const metricsLabels = {
        operation: "signup User",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const hashedPassword = bcrypt.hashSync(data.password, 10)

        const createdUser = await createUser({
            ...data,
            password: hashedPassword,
        })

        if (!createdUser) return reponsesFail(400, "Create User Failed.")

        const token = generateAuthToken(createdUser)

        timer({ ...metricsLabels, success: "true" })

        return { body: token }
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })

        return reponsesFail(500, e.message)
    }
}

interface LoginResponseData {
    token: string
    userId: number
    role: "ADMIN" | "USER"
}
export async function login(
    email: string,
    password: string
): Promise<ResponseType<LoginResponseData>> {
    try {
        const user = await getUserByEmail(email)
        if (!user) return reponsesFail(400, "Invalid email or password.")

        const validPassword = await validatePassword(user, password)

        if (!validPassword)
            return reponsesFail(400, "Invalid email or password.")

        const token = generateAuthToken(user)

        return { body: { token, userId: user.id, role: user.role } }
    } catch (err) {
        return reponsesFail(500, "unexpected Error occurced at function login.")
    }
}

export function generateAuthToken(user: User) {
    const JWT = process.env.JWTPRIVATEKEY
    if (!JWT) throw new Error("There are no JWTPRIVATEKEY ")

    const data = pick(user, "id", "email", "role", "name")
    const token = jwt.sign(data, JWT)

    return token
}

export async function validatePassword(user: User, password: string) {
    return bcrypt.compareSync(password, user.password)
}
