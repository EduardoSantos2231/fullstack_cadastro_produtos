import express from "express"
import { router } from "./routes/index.routes.js"
import cors from "cors"
const port = process.env.PORT || 8080
const app = express()

//por ser uma aplicação remota, não inclui domínios e métodos que serão aceitos
app.use(cors())

app.use(express.json())

app.use(router)

app.listen(port, ()=>{
    console.log(`running on http://localhost:${port}/products`)
})