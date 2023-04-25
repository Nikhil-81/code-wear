// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Connect =require("../../mongoose/db.js")
var mongoose = require('mongoose');
const PRODUCT_model=require("../../models/product.model")

export default async function test(req,res){
  await Connect

  if(req.query.category){

    let data=await PRODUCT_model.find(req.query)
    res.send(data)
  } 
  else if(req.query._id){
    let data=await PRODUCT_model.find(req.query)
    res.send(data)
  
} 
  
}

