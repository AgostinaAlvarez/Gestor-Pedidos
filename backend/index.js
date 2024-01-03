import express from "express"
import 'dotenv/config'
//import conn from "./db/db.js"
import cors from 'cors'
//import AppRoutes from './routes/app.routes.js'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())
//app.use(AppRoutes)

app.listen(PORT)
console.log(`server on port ${PORT}`)