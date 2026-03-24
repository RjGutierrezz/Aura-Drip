import { Router } from "express"

// defines valid input shape for POST to prevent unwanted data from entering
// our backend
import { z } from "zod"
import prisma from "../lib/prisma"


const router = Router()

// ** replaced temporary array with real database

// type ClothingItem = {
//   id: string
//   name: string
//   category: string
//   color: string
// }

// temporary fake database 
// const clothingItems: ClothingItem[] = [
//   { id: "1", name: "Cream Tee", category: "Tops", color: "Beige" },
//   { id: "2", name: "Wide Trousers", category: "Bottoms", color: "Sand" },
// ]


// this is using Zod to prevent bad data entering the database
// it expects JSON objects
const createClothingSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  color: z.string().min(1),
})

// updating the items
const updateClothingSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  color: z.string().min(1)
})




// returns current clothing list
router.get("/", async (_req, res) => {
  const items = await prisma.clothingItem.findMany({
    orderBy: { createdAt: "desc"},
  })
  res.json({ ok: true, data: items })
})

// adds a new item
router.post("/", async (req, res) => {
  const parsed = createClothingSchema.safeParse(req.body)
  
  if (!parsed.success) {
    return res.status(400).json({ok: false, error: parsed.error.flatten() })
  }
  
  const newItem = await prisma.clothingItem.create({ data: parsed.data })
  return res.status(201).json({ ok: true, data: newItem})

})


// editing the item inside the database
router.patch("/:id", async (req, res) => {

  // gets the id from URL
  const { id } = req.params

  // validate the input making sure that the data follows the schema
  const parsed = updateClothingSchema.safeParse(req.body)

  // error handling
  if (!parsed.success) {
    return res.status(400).json({ok: false, error: parsed.error.flatten() })
  }

  try {
    // operation that uses prisma where id finds the item and the data will be
    // the update to the database
    const updated = await prisma.clothingItem.update({
      where: { id },
      // this is the data that will be passed to the backend and we safely trust
      data: parsed.data,
    })

    // now we passed the data to our backend
    return res.json({ ok : true, data: updated })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError && error.code ===
      "P2025"
    ) {
      return res.status(404).json({ok: false, error: "Item not found"})
    }
    return res.status(500).json({ok: false, error: "Update failed"})
  }
})


router.delete("/:id", async (req, res) => {
  const { id } = req.params

  // error handling
  if(!id) {
    return res.status(400).json({ok: false, error: "Missing id"})
  }
  
  try {
    // deletes matching row in database
    await prisma.clothingItem.delete({
      where: {id},
    })

    return res.json({ok: true})
  } catch (error) {
    return res.status(404).json({ok: false, error: "Clothing item not found"})
  }
})











export default router




