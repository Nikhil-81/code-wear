import { PRODUCT_GET_ERROR, PRODUCT_GET_REQUEST, PRODUCT_GET_SUCESS } from "./product_action_type"
import axios from "axios"
export const getServerSideProps=(param)=>(dispatch)=>{
dispatch({type:PRODUCT_GET_REQUEST})
try{
    console.log(param)
    return axios.get(`http://localhost:3000/api/products?category=${param}`)
    // .then(res=>dispatch({type:PRODUCT_GET_SUCESS,payload:res.data}))
    .then(res=>dispatch({type:PRODUCT_GET_SUCESS,payload:res.data}))

    .catch(err=>dispatch({type:PRODUCT_GET_ERROR}))
}
catch(err){
    dispatch({type:PRODUCT_GET_ERROR})
}
  }