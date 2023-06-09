import { Single_getServerSideProps } from "@/components/fetch"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useReducer, useState } from "react"

export default function SingleProduct(){
  const [pincode,setpincode]=useState(null)
  const [data,setdata]=useState()
    const router=useRouter()
    const [pin,setpin]=useState({"PIN":""})
    const handlechange=(e)=>{
   setpin({...pin,'PIN':e.target.value})
    }
    const Hendle_pin_check=async()=>{
      let res=await fetch("http://localhost:3000/api/pin",{
        method:"POST",
        body:JSON.stringify(pin),
        headers: {
          "Content-Type": "application/json",
        },
      })
      let final=await res.json()
      if(final){
        setpincode(true)
      }
      else{
        setpincode(false)
      }
    }
    const {slug} =router.query

    useEffect(()=>{
      Single_getServerSideProps(slug).then(res=>setdata(res.props.pro_data[0])).catch(err=>console.log(err))
    },[slug])
    console.log(data)
    return (
      
        <div>
          {

          
<section class="text-gray-600 bg-slate-100 body-font overflow-hidden">
  <div class="container px-5 py-2 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 md:w-3/2 md:h-3/2 sm:w-3/2 sm:h-1/2 w-full lg:h-auto py-6  h-64 object-cover object-center rounded" src={data?.image}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-600 text-3xl title-font font-medium mb-1">{data?.title}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="ml-3">4 Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">{data?.desc}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
          <div class="flex">
            <span class="mr-3">Color</span>
            {data?.color.map(el=>(
                <>
                {console.log(el)}
              <button Style={`background:${el}`} class={`border-2 mr-1 rounded-full w-6 h-6 focus:outline-none`}></button>
                 </>
            ))}
          
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
              <select class="rounded border border-gray-700 focus:ring-2 focus:ring-purple-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-purple-500 text-gray-600 pl-3 pr-10">
                <option className="text-gray-600" >SM</option>
                <option className="text-gray-600" >M</option>
                <option className="text-gray-600" >L</option>
                <option className="text-gray-600" >XL</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
     
        </div>
        <div class="flex">
         

          <span class="title-font font-medium text-2xl text-slate-800">${data?.price}</span>

        



          <Link href='/checkout' class="ml-auto"  > <button class="flex ml-auto text-white bg-purple-500 border-0  py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Add to cart</button></Link>
          <button class="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
          </div>
          <div className=" flex  align-middle mt-3 items-center">
  <div className="md:flex-col" >
  <input placeholder="Your pincode" className="shadow-mdborder border-purple-400 text-slate-900 px-1 placeholder-slate-900 mr-3" onChange={(e)=>handlechange(e)} />
  <button className="px-2 py-1 bg-purple-600 text-white rounded-md " onClick={Hendle_pin_check} >Check</button>
  {pincode==null ?(<p></p>):pincode==false?(<p class="ml-3 text-red-600 " >Delivery is not available in youtr area</p>):(<p class="ml-3 text-green-600 ">Delivery is possiable</p>)}
  </div>
</div>
 
      </div>
    </div>
  </div>
</section>
}
        </div>
    )
}