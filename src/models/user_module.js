const mongoose =require("mongoose")

const User_Schema=new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
})

const User_modue=mongoose.model("User",User_Schema)

module.exports=User_modue