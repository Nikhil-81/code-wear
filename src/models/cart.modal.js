const mongoose =require("mongoose")
mongoose.Promise = global.Promise;
const CART_SCHEMA=new mongoose.Schema({
    User_id:{type:"string",requires:true},
    product:[
        {
            
            Product_id:{type:"string", require:true},
            qty:{type:"Number", default:1},
        }
    ],
    address:{type:"string",require:true},
    amount:{type:"number",require:true},
    status:{type:"strung",default:"panding"}

})

const CART_model=mongoose.models.Cart ||mongoose.model("Cart",CART_SCHEMA) 

module.exports=CART_model
