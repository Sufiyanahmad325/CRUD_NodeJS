const bcrypt = require("bcrypt")
const mongoose =require("mongoose")
const {Schema} = mongoose

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true , "name is required"],
        maxLength:[20 , "name must be less than 20 charactor"]
    },
    email:{
        type:String,
        require:[true , "email is required"],
        unique:[true , "this email id is all ready exist"]
    },
    password:{
        type: String,
        require:[true , "password is required"],
        unique:true
    }
})

userSchema.pre("save" ,async function(next){
    if(!this.isModified("password")){
        return next()
    }
    this.password = await bcrypt.hash(this.password,10)
    return next()
})


module.exports=mongoose.model("User" , userSchema)