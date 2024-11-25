const express = require ("express")
const app = express()
const connectDb = require("./config/dbConnection")
const dotenv = require("dotenv")
dotenv.config()

connectDb()
app.use(express.json())

const port = process.env.PORT || 5000


app.use("/api/user", require("./routes/userRoutes"))

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})