import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import '../style/products.css'
import '../style/productCategory.css'
import { Link } from "react-router-dom"
import CartButton from "./cartButton"
import Header from "../header/header"



export default function ProductCategory(){
const [productsCategory,setProductsCategory]=useState([])
const {category}=useParams()

useEffect(()=>{
   ( async()=>{
       const response=await fetch(`https://dummyjson.com/products/category/${category}`)
       const json=await response.json()
       setProductsCategory(json.products)
    })()
 },[category,setProductsCategory])

return (
   <div className="root_container">
      <Header/>
      <h1>{category}</h1>
      <div className="productCategory-container">
         {productsCategory.map(product=>
            <article className="card-article" key={product.id}>
            <Link to={`/products/${product.id}`} className="link">
            <div className="card-image">
               <img src={product.thumbnail} alt="foto"/>
            </div>
            <div className="card-body">
               <h6 className="card-title">{product.title}</h6>
               <p className="card-text">brand: {product.brand}</p>
               <div>
                  <span className="priceAfter">{product.price} $</span>
                  <span className="Discount"> - {product.discountPercentage} %</span>
                  <span className="priceBefore">{ Math.round(product.price*100/(100-product.discountPercentage)) } $</span>
               </div>
            </div>
            </Link>
            <div className="card-footer">
               <div>
                  <i className="bi bi-star-fill .text-warning" style={{fontSize:20+'px',color:'yellow'}}></i>
                  <span>{product.rating}</span>   
               </div>
               <CartButton product={product}/>  
            </div>
         </article>
            )}
      </div>
   </div>
   

)
}