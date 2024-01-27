import express from 'express'

const router = express.Router()

router.get("/", (_req, res) => {
    res.send("Fetching for all the records of a user")
})

router.post("/", (_req, res) => {
    res.send("Endpoint for posting a record")
})

export default router