import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  let username = localStorage.getItem("username")
  const [products, setProducts] = useState([])
  const[searchQuery,setSearchQuery]=useState('')
  const[selectedCategory,setSelectedCategory]=useState('all')
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then((x)=>{console.log("fetched data:",x.data);
     setProducts(x.data);
    })
    .catch(err=>console.log(err))
  },[])

  function handleProduct(id){
      navigate(`/productdetail/${id}`)
  }
  const filterProducts=products.filter((item)=>{
    const matchesSearch=item.product_name?.toLowerCase()
    .includes(searchQuery.toLowerCase());

  const matchesCategory=
  selectedCategory==='all'||item.product_category?.toLowerCase()===selectedCategory.toLowerCase();

  return matchesSearch && matchesCategory;
  })
  return (
   <>
    <Navbar/>
    <center><h1>Welcome  {username}</h1></center>
    <div className='filter-container'>
      <input
      type='text'
      className='search-input'
      placeholder='search products'
      value={searchQuery}
      onChange={(e)=>setSearchQuery(e.target.value)}
      />
      <select 
       className='category-select'
       value={selectedCategory}
       onChange={(e)=>setSelectedCategory(e.target.value)}
       >
        <option value='all'>All categories</option>
        <option value='cosmetics'>Cosmetics</option>
        <option value='dairy'>Dairy products</option>
        <option value='electronics'>Electronics</option>
        <option value='fashion'>Fashion</option>
       </select>
    </div>
    <div className="product-container">
      {filterProducts.map((x)=>{
      return(
        <div key={x.id} className='product'>
        <img src={x.product_image} height={"200px"} width={"200px"} alt={x.product_name} />
        <h3>{x.product_name}</h3>
        <button className='view-btn' onClick={()=>{handleProduct(x.id)}}>View</button>
      </div>
      )
    })}
    </div>
   </>
  )
}
export default Dashboard