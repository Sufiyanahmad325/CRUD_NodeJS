const express = require("express")
const { home, createUser, getUser, deleteUser } = require("../controller/userController")
const router = express.Router()


router.get("/home" , home)

router.post("/createUser" , createUser)

router.post("/getuser" , getUser)

router.post('/deleteuser' , deleteUser)




module.exports=router