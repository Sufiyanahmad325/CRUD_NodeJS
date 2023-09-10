const User = require("../modelSchema/schema.js")
const bcrypt = require("bcrypt")



const home = (req ,res)=>{
    res.send("Hello World")
}


const createUser =async(req ,res)=>{
    const {name , email , password , confirmPassword} = req.body
    const user = await User.create({
        name,
        email,
        password,
    })
    
        return res.status(200).json({
             success:true,
             data:user
         })

    }



const getUser = async(req, res)=>{
    const {email , password} = req.body

    const main = await User.findOne({
        email,
    }).select("+password")


    if ((await bcrypt.compare(password , main.password) ) ){
        return res.status(200).json({
            success:true,
            data: main.password=undefined,
            data:main
        })
    }

   


}


const deleteUser=async(req ,res)=>{
    const{email}=req.body
    const user =await User.findOneAndDelete({email})
    return res.status(200).json({
      success: true,
      message: "User deleted",
    });
}







module.exports={
    home,
    createUser,
    getUser,
    deleteUser,
}