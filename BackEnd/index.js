import express from "express"
import dotenv from "dotenv"
import cors from "cors"


import router from "./routes/index.js"
import connectToDb from "./db/index.js"

dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors({
    origin : "*"
}))


app.use(router)



app.listen(PORT , () => {
    connectToDb()
    console.log(`App is running in http://localhost:${PORT}`);
})