import express from 'express'

import recordRouter from './routes/record'

const app = express()

app.use("/record", recordRouter)

app.use(express.json())

const PORT = 8082;

app.get('/test', (_req, res) => {
    console.log("this is a test endpoint")
    res.send("OK tst")
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))