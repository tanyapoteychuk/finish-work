 import { Link } from "react-router-dom"
 import CartButton from "./cartButton"

export default function CardLayout(product){
   console.log(product);
   return(
      <article className="card-article" key={product.product.id}>
      <Link to={`products/${product.product.id}`} className="link">
         <div className="card-image">
            <img src={product.product.thumbnail} alt="foto"/>
         </div>
         <div className="card-body">
            <h6 className="card-title">{product.product.title}</h6>
            <p className="card-text">brand: {product.product.brand}</p>
            <div>
               <span className="priceAfter">{product.product.price} $</span>
               <span className="Discount"> - {product.product.discountPercentage} %</span>
               <span className="priceBefore">{ Math.round(product.product.price*100/(100-product.product.discountPercentage)) } $</span>
            </div>
         </div>
      </Link>
      <div className="card-footer">
         <div>
            <i className="bi bi-star-fill .text-warning" style={{fontSize:20+'px',color:'yellow'}}></i>
            <span>{product.product.rating}</span>   
         </div>
         <CartButton product={product.product}/>  
      </div>
   </article>
   )
}