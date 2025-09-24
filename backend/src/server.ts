import express from "express"
import { router } from "./routes/index.routes.js"
import cors from "cors"
const port = process.env.PORT || 8080
const app = express()

const cosrOptions = {origin: process.env.ALLOWED_URL}

app.use(cors(cosrOptions))
app.use(express.json())

app.use(router)

app.listen(port, ()=>{
    console.log(`running on http://localhost:${port}/`)
})