require("dotenv").config()
const express = require("express")
const app = express()
const userRouter = require("./route/router.js")
const connetedToDB = require("./config/connectedToDB.js")

app.use(express.json())
connetedToDB()



app.use("/" , userRouter)

app.get("/" , (req ,res)=>{
    res.send("hello there")
})





module.exports=app