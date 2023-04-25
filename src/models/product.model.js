const mongoose =require("mongoose")
mongoose.Promise = global.Promise;
const PRODUCT_SCHEMA=new mongoose.Schema({
    title:{type:"string", require:true},
    image:{type:"string", require:true},
    category:{type:"string", require:true},
    rating:{type:"string"},
    desc:{type:"string", require:true},
    price:{type:"string", require:true},
    size:{type:Array},
    slug:{type:"string",require:true},
    available_qty:{type:"number", require:true},
    color:{type:Array}
    
})

const PRODUCT_model=mongoose.models.Product ||mongoose.model("Product",PRODUCT_SCHEMA) 

module.exports=PRODUCT_model
