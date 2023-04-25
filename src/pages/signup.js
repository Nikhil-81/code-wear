import Link from "next/link";
import { useRef } from "react";
let init_state={
username:"",
email:"",
password:""
}
export default function Signup(){
let user_data_input=useRef(init_state)

const hendleChange=(e)=>{
const {value,name}=e.target
console.log(value,name)
user_data_input.current[name]=value
}

const hendleSubmit=()=>{
  console.log(user_data_input.current)
}

    return(
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 ">
   
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col m-auto  w-full mt-20 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign up</h2>
      <div class="relative mb-4">
        <label for="username" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="username" name="username" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>hendleChange(e)} />
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>hendleChange(e)}/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>hendleChange(e)}/>
      </div>
      <button onClick={()=>hendleSubmit()} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3">Already heave account<Link class="text-sm text-indigo-900" href="/login" > Login</Link></p>
    </div>
  </div>
</section>
    )
}