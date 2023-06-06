const stripeSK = process.env.STRIPESECERTKEY

if (!stripeSK)
    throw new Error("NO Valid stripe secertkey, pls check the .env file.")

export const stripe = require("stripe")(stripeSK)
