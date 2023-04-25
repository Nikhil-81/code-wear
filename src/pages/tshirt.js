import {getServerSideProps} from "@/redux/product_redux/product_action";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Tshirt({pro_data}){
  const paramn=useRouter().route.split("/")
  const [pro_data_val,set_pro_data_val]=useState()
  const dispatch=useDispatch()
  const product=useSelector((store)=>store.product)
  console.log(product)
useEffect(()=>{
 dispatch(getServerSideProps(paramn[1])).then(res=>set_pro_data_val(res.payload)).catch(err=>console.log(err))
},[])
  return (
        <div>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      {
        pro_data_val?.map(el=>(  <Link  href={`/product/${el.slug}`} class="lg:w-1/4 md:w-1/3 sm:w-1/2  p-4 w-full">
     
        <img alt="ecommerce" class="object-cover object-center w-full h-80 block" src={el.image}/>
      
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{el.category}</h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">{el.title}</h2>
        <p class="mt-1">${el.price}</p>
      </div>
    </Link>))
        
    
      }
 
    </div>
  </div>
</section>
        </div>
    )
}