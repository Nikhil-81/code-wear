import { PRODUCT_GET_ERROR, PRODUCT_GET_REQUEST, PRODUCT_GET_SUCESS } from "./product_action_type"

const initstate={
    loading:false,
    data:[],
    product_sucess:false,
    product_error:false
}
export const product_reducer=(state=initstate,{type,payload})=>{
    switch (type){
        case PRODUCT_GET_REQUEST:{
            return ({...state,loading:true})
        }
        case PRODUCT_GET_SUCESS:{
            return ({...state,loading:false,product_sucess:true,product_error:false,data:payload})
        }
        case PRODUCT_GET_ERROR:{
            return ({...state,loading:false,product_sucess:false,product_error:true})
        }
        default:{
            return(state)
        }
    }
}