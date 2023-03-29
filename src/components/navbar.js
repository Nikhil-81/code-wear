import Link from "next/link";
import { useRef, useState } from "react";
import { AiOutlineShoppingCart,AiFillCloseCircle, AiFillDelete, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
export default function Navbar(){
    const drawer=useRef()
 function hendleTogle(){
if(drawer.current.classList.contains("translate-x-full")){
    drawer.current.classList.remove("translate-x-full")
    drawer.current.classList.add("translate-x-0")
}
else if(!drawer.current.classList.contains("translate-x-full")){
    drawer.current.classList.remove("translate-x-0")
    drawer.current.classList.add("translate-x-full")
}
 }
    return (<>
    
        <div className="sticky  top-0 bg-slate-100 z-10 " >
            <header class="text-gray-600 body-font ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  ">
        <Link  href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Codewear</span>
        </Link>
    
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-between ">
      <Link  href="/tshirt"  class="mr-5 hover:text-gray-900 font-bold ">T-shirt</Link>
      <Link  href="/hoodies"  class="mr-5 hover:text-gray-900 font-bold">Hoodes</Link>
      <Link  href="/mugs"  class="mr-5 hover:text-gray-900 font-bold">Mugs</Link>
      <Link  href="/stickers"  class="mr-5 hover:text-gray-900 font-bold">Stickers</Link>
    </nav>
<span onClick={hendleTogle} ><AiOutlineShoppingCart className="text-4xl mr-4" /></span>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">SingUp/SingIn
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>

 
  </div>
 
</header>
<div  ref={drawer} className="absolute top-0 right-0 lg:w-1/3 md:max-w-3xl  h-screen bg-purple-400 transform translate-x-full transition delay-300 z-100" >
    <h2 className="text-white text-center mt-10 text-2xl ">My cart</h2>
    <div  className="mx-10 overflow-y-scroll h-4/6 " >

    
<table className="mx-10 overflow-y-scroll ">
  <tr >
    <th>Title</th>
    <th>QTY</th>
    <th>Remove</th>
  </tr>
  <tr className="shadow-md bg-slate-300 py-2" >
    <td className="text-center" >Air jordan special </td>
    <td className="quantity flex justify-around" ><span className="flex items-center gap-x-2 " >`<AiFillMinusCircle />  5  <AiFillPlusCircle/>`</span></td>
    <td ><AiFillDelete className="block m-auto" /></td>
  </tr>
  <br/>
  <tr className="shadow-md  bg-slate-400 ">
    <td className="text-center" >Air jordan special Air jordan special  Air jordan special  </td>
    <td className="quantity flex justify-around" ><span className="flex items-center gap-x-2 m-auto" >`<AiFillMinusCircle/>  5  <AiFillPlusCircle/>`</span></td>
    <td ><AiFillDelete className="block m-auto" /></td>
  </tr>
 <br/>



  
</table>
</div>
    <div className="flex justify-center align-baseline mt-10 ">
      <button  className="bg-slate-200 p-3  rounded-md bold mr-3 " >Checkout</button>
      <button  className="bg-slate-200 p-3  rounded-md bold  " >Clear</button>

    </div>
<span className="absolute right-10 top-5 text-3xl" onClick={hendleTogle}><AiFillCloseCircle/></span>
  </div>
        </div>
       
     </>   
    )
}