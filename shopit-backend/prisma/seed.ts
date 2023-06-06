import { PrismaClient } from "@prisma/client"
import { add } from "date-fns"

// Instantiate Prisma Client
const prisma = new PrismaClient()

// A `main` function so that we can use async/await
async function main() {
    await prisma.product.deleteMany({})
    await prisma.collection.deleteMany({})

    const air_sideboard_low = await prisma.product.create({
        data: {
            title: "Air Sideboard Low",
            slug: "air-sideboard-low",
            description: `<p> Air is a sideboard for the centre of the room. It combines a graphic pattern of ribs with natural cane inlays which gives a feeling of lightness and transparency. Air can be used as freestanding room dividers or placed against a wall.</p>
                        <p>The woven cane gives it a visible surface, but also provides a sense of depth. You can glimpse what’s inside, adding some careful mystery to the piece. The fact that the design is transparent also fulfils a function. The woven cane ventilates the cupboard which is practical when storing both clothes and electronic devices. A lamp behind the see-through doors makes Air shine like a diamond.</p>`,
            price: 4205,
            SKU: "F14525123",
            gallery: [
                "https://cdn.shopify.com/s/files/1/1087/6904/products/air-sideboard-low-617050_large.jpg?v=1678825239",
                "https://cdn.shopify.com/s/files/1/1087/6904/products/air-sideboard-low-824028_1400x.jpg?v=1678744396",
                "https://cdn.shopify.com/s/files/1/1087/6904/products/air-sideboard-low-421240_1400x.jpg?v=1678744396",
                "https://cdn.shopify.com/s/files/1/1087/6904/products/air-sideboard-low-980473_1400x.jpg?v=1678744396",
            ],
            thumbnail:
                "https://cdn.shopify.com/s/files/1/1087/6904/products/air-sideboard-low-617050_large.jpg?v=1678825239",
            hoverImage:
                "https://cdn.shopify.com/s/files/1/1087/6904/products/air-sideboard-low-824028_1400x.jpg?v=1678744396",
            inventory: 6,
            collectionsOnProducts: {
                create: {
                    collection: {
                        create: {
                            title: "Lighting",
                            slug: "lighting",
                            description: `
                            Transform the way your ceilings and rooms are illuminated with modern ceiling light options from HORNE. This highly curated gallery of ceiling light fixtures will brighten, embolden, and maximize your space with a touch of modernity and minimalism. As homeowners and designers know, the right ceiling light can usher in a completely new atmosphere into a room, so finding the one that brings the most out of your space is crucial. HORNE offers designs for contemporary ceiling lighting that span a world of inspiration, from pieces like the daring and unique 2 Arm Mobile Light to updated takes on traditional options. No matter how far you’re wanting to take your modern ceiling lights, this collection is full of answers for every space and home. Elevate your room, studio, or workspace with a minimalist ceiling light from HORNE.
                            `,
                            thumbnail:
                                "cdn.shopify.com/s/files/1/1087/6904/collections/ceiling-lights-279305_2000x.png?v=1678747938",
                        },
                    },
                },
            },
        },
    })

    const bell_pandant = await prisma.product.create({
        data: {
            title: "Bell Pendant",
            slug: "bell-pandant",
            description: `
            <p>The expression is robust, the form is simple. Bell is a ceiling lamp in an iconic bell shape and with special attention paid to its details. Its round, even surface gives the lamp the impression of having been cast. Rather than being hidden, the meeting between the lead and the lamp is accentuated in a modern and original way.</p \n
            <p>In Bell you have a lamp where the connection between the lead and the lamp is evident. Just as light is a gatherer, the bell has historically been used to call people to come together - to gather people. With its bell shape, Bell can also be used to create a cozy place to gather in the room.</p>`,
            price: 524,
            SKU: "F145251125",
            gallery: [
                "https://cdn.shopify.com/s/files/1/1087/6904/products/bell-pendant-717449_1400x.jpg?v=1678745777",
                "https://cdn.shopify.com/s/files/1/1087/6904/products/bell-pendant-717449.jpg?v=1678745777",
            ],
            thumbnail:
                "https://cdn.shopify.com/s/files/1/1087/6904/products/bell-pendant-717449_1400x.jpg?v=1678745777",
            hoverImage:
                "https://cdn.shopify.com/s/files/1/1087/6904/products/bell-pendant-573200_1400x.jpg?v=1678745777",
            inventory: 300,
        },
    })

    //     const collection_ceiling_lights = await prisma.collection.create({
    //         data: {
    //             title: "Lighting",
    //             slug: "lighting",
    //             description: `Transform the way your ceilings and rooms are illuminated with modern ceiling light options from HORNE. This highly curated gallery of ceiling light fixtures will brighten, embolden, and maximize your space with a touch of modernity and minimalism. As homeowners and designers know, the right ceiling light can usher in a completely new atmosphere into a room, so finding the one that brings the most out of your space is crucial.
    // HORNE offers designs for contemporary ceiling lighting that span a world of inspiration, from pieces like the daring and unique 2 Arm Mobile Light to updated takes on traditional options. No matter how far you’re wanting to take your modern ceiling lights, this collection is full of answers for every space and home. Elevate your room, studio, or workspace with a minimalist ceiling light from HORNE.`,
    //             thumbnail:
    //                 "https://cdn.shopify.com/s/files/1/1087/6904/collections/ceiling-lights-279305_2000x.png?v=1678747938",
    //         },
    //     })
    const collections_outdoor = await prisma.collection.create({
        data: {
            title: "Outdoor",
            slug: "outdoor",
            description: `Explore our collection of contemporary outdoor furniture and Scandinavian outdoor decor and lighting. Shop for everything you need to create an outdoor oasis at home. It doesn't matter if you reside in the urban jungle or have a whole lot of lawn, we've got modern, minimalist outdoor furniture and accessories for every outside space. Serve guests poolside in alfresco-friendly serveware, find the perfect chaise for sun-worshipping or create an outdoor dining set for your next backyard brunch. Whether your outdoor needs are for year-round enjoyment or your summer season is fleeting, you’ll find only the highest quality Scandinavian outdoor furnishings and accessories from brands like Cane Line, Skagerak, Korbo and more.
`,
            thumbnail:
                "cdn.shopify.com/s/files/1/1087/6904/collections/Screen_Shot_2023-02-23_at_5.14.08_PM_2000x.png?v=1677190454",
        },
    })
    const collections_kitchen_dining = await prisma.collection.create({
        data: {
            title: "Kitchen+dining",
            slug: "kitchen-dining",
            description: `<p>The hub of every home is the kitchen. And for us, a kitchen is the perfect place to create a visual feast with a variety of modern utensils, decorations, and table sets. Find everything you need for a mid-century modern kitchen from bowls and baking dishes to modern dining table sets, cookware, and professional-grade chef’s knives</p><p>
Outfit your kitchen – the heart of the home – with modern kitchen accessories including spice racks, world-class knives, placemats, bakeware, and so much more. Shop our collection of kitchen accessories to make your kitchen mealtime-time ready.</p>`,
            thumbnail:
                "cdn.shopify.com/s/files/1/1087/6904/collections/kitchen-dining-715140_2000x.png?v=1678748562",
        },
    })

    // console.log(collection_ceiling_lights)
    console.log(air_sideboard_low)
}

main()
    .catch((e: Error) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        // Disconnect Prisma Client
        await prisma.$disconnect()
    })
