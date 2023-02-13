import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CartButton from "./cartButton";
import '../style/product.css';
import '../style/rating.css';
import Header from '../header/header'
import Rating from "./rating";
import Carusel from "./swiper";

export default function Product(){

const {id}=useParams('id')
const [product,setProduct]=useState(null)

useEffect(()=>{
  ( async()=>{
      const response=await fetch(`https://dummyjson.com/products/${id}`)
      const json=await response.json()
      setProduct(json)
   })()
},[id,setProduct])
 console.log('product====>',product);  
return(
     <div className="root_container">
     <Header/>
     <Link to="/" className="linkProduct">BACK</Link>

     {product && 
     <article className="card-container">
        <Carusel product={product}/>
        <div className="product-conteiner">
          <h2>{product.title}</h2>
          <span>Brand: <p>{product.brand}</p></span> 
          <span>Description: <p>{product.description}</p></span>
          <div className="product-container-price">
            <span className="priceAfter">{product.price} $</span>
            <span className="discount"> - {product.discountPercentage} %</span>
            <span className="priceBefore">{ Math.round(product.price*100/(100-product.discountPercentage)) } $</span>
          </div>
          <Rating value={product.rating}/> <span>{product.rating}</span>
          <p className="stock">stock : {product.stock}</p>
           <CartButton product={product}/>
        </div>
     </article>
     
     }
     </div>
   )
}