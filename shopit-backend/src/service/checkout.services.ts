import prisma from "../libs/prisma"
import { stripe } from "../libs/stripe"

export interface CheckoutSessionProdut {
    productId: number
    quantity: number
}

async function lookupProductPrice(order: CheckoutSessionProdut[]) {
    console.log("order", order)
    try {
        const productsDetail = await prisma.product.findMany({
            where: {
                id: { in: order.map(i => i.productId) },
            },
        })

        if (!productsDetail) throw new Error("No product found.")

        const orderWithProductDetaul = order.map(o => ({
            ...o,
            ...productsDetail.find(pd => pd.id === o.productId),
        }))

        return orderWithProductDetaul.map(opd => ({
            price_data: {
                currency: "cad",
                product_data: {
                    name: opd.title,
                },
                unit_amount: opd.price,
            },
            quantity: opd.quantity,
        }))
    } catch (e) {
        console.log("ERRor", e)
        throw new Error(e)
    }
}

export async function createCheckoutSession(order: CheckoutSessionProdut[]) {
    const frontEndDomain = process.env.FRONTENDDOMAIN
    if (!frontEndDomain)
        throw new Error(
            "NO Valid stripe frontEndDomain, pls check the .env file."
        )

    const line_items = await lookupProductPrice(order)
    console.log("line_items", line_items)

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: `${frontEndDomain}/checkoutsucess?success=true`,
        cancel_url: `${frontEndDomain}/cart?canceled=true`,
    })

    return { url: session.url }
}

const calculateOrderAmount = (items: any) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400
}
