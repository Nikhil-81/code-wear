export default function Pincode(req,res){
    let p=req.body.PIN
    let pincodes=["111111","440011","441111"]
    if(req.body.PIN==undefined){
        res.send(false)
    }
    else{
  
if(pincodes.includes(p)){
    res.send(true)
}
else{
    res.send(false)
}
    }
}