

const Connect =require("../../mongoose/db.js")
var mongoose = require('mongoose');
const CART_model=require("../../models/cart.model")

export default async function cart(req,res){
  await Connect
  let data=await CART_model.find()
  res.send(data)
}

