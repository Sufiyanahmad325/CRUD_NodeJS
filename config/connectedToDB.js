const mongoose = require("mongoose")

const connetedToDB = async()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then((conn)=>{
        console.log(`connected to DB: ${conn.connection.host}`)
        
    }).catch((error)=>{
        console.log(error.message);
        process.exit(1)
    })
}


module.exports = connetedToDB