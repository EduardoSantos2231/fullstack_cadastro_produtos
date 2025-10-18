import express from "express"
import { router } from "./routes/index.routes.js"
import cors from "cors"
const port = process.env.PORT || 8080
const app = express()


app.use(cors({origin: "http://localhost:5173", allowedHeaders: ["Access-Control-Allow-Origin"]}))
app.use(express.json())

app.use(router)

app.listen(port, ()=>{
    console.log(`running on http://localhost:${port}/`)
})