import React,{useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const ProductDetail = () => {
  let {id} = useParams()
  const [product, setProduct] = useState({})
  const [name,setName] =useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [quantity, setQuantity] = useState(1)

  let navigate = useNavigate()
    axios.get(`http://localhost:3000/products/${id}/`)
    .then(x=>setProduct(x.data))
    .catch(err=>console.log(err))

    function inc(){
      setQuantity(quantity+1)
    }
    function dec(){
     if(quantity>1){
      setQuantity(quantity-1)
     }
    }
    function placeOrder(e){
      e.preventDefault()
      let order = {
        customer_id:localStorage.getItem("userId"),
        customer_name:name,
        customer_email:email,
        customer_phone:mobile,
        customer_addres:address,
        product_id:product.id,
        product_name:product.product_name,
        product_quantity:quantity,
        total:quantity*product.product_price,
        order_date:new Date().toLocaleDateString(),
        product_img:product.product_image
      }

      axios.post("http://localhost:3000/orders",order)
      .then(()=>{
        toast.success("Order placed")
        navigate("/success")
      })
      .catch(err=>toast.error("Failed to place"))
    }
  return (
    <>
    <Navbar/>
      <center><h1>{product.product_name}</h1></center>
      <img src={product.product_image} height={"300px"} alt="" />
      <h3>Price: {product.product_price}</h3>
      <p><b>Specification:</b> {product.product_description}</p>
      <p><b>Ratings</b>: ⭐⭐⭐⭐{product.product_ratings}/5</p>
      <button onClick={dec}>-</button>
      <h2>{quantity}</h2>
      <button onClick={inc}>+</button>
      <form onSubmit={placeOrder}>
        <input 
        type="text" 
        placeholder='Enter Name' 
        required 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        /> <br />
        <input 
        type="text" 
        placeholder='Enter Mobile no' 
        required
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)}
        /> <br />
        <input 
        type="text" 
        placeholder='Enter Email' 
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        /> <br />
        <textarea 
        placeholder='Enter Address' 
        required
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        ></textarea>
         <button>Order</button>
      </form>
    </>
  )
}

export default ProductDetail