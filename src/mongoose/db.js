const mongoose =require("mongoose")

const MONGODB_URI =process.env.URL
let Connect
if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
        )

    }
    else{
        
        Connect= mongoose.connect(MONGODB_URI)
  }

module.exports=Connect