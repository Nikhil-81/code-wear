import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { store } from '@/redux/store'
import '@/styles/globals.css'
import { useState } from 'react'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
const [cart,setcart]=useState([
  {name:"fjsfdsfjjjjjjjjjjjjjjfdddddddddddddddddddddddffffffffffffffffddddd",
  price:200,
id:1,qty:1}
])
const [subtotal,setsubtotal]=useState(200)
const [num,setnums]=useState([1])

const Add_to_cart=(data)=>{
  console.log("add")
if(num.includes(data.id)){
 cart.find((el)=>el.id==data.id?{...el,"qty":el.qty+=1}:el)
 console.log(cart)
 setsubtotal(prev=>prev+Number(data.price))
}
else {
  setnums([...num,data.id])
  setsubtotal(prev=>prev+Number(data.price))
  setcart({...cart,data})
}
}
const remove_from_cart=(data)=>{
let newcart=cart.filter((el)=>(el.id!=data.id))
setcart(newcart)
setsubtotal(prev=>prev-(Number(data.qty)*Number(data.price)))
let new_num=num.filter((el)=>el.id!=data.id)
setnums(new_num)

}
const reduceCont=(data)=>{
  console.log("reduce")
  if(num.includes(data.id)){
    cart.find((el)=>el.id==data.id?{...el,"qty":el.qty-=1}:el)
    console.log(cart)
    setsubtotal(prev=>prev-Number(data.price))
   }
}


  return(

    <>
    <Provider store={store} >
    <Navbar cart={cart} subtotal={subtotal} num={num} Add_to_cart={Add_to_cart} remove_from_cart={remove_from_cart} reduceCont={reduceCont}  />
    <Component cart={cart} subtotal={subtotal} num={num} Add_to_cart={Add_to_cart} remove_from_cart={remove_from_cart} reduceCont={reduceCont}  {...pageProps} />
    <Footer/>
    </Provider>
    </>
    )
}


