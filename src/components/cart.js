import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useState } from "react";
import { selectCartProducts,increment,decrement,changeCheckbox,changeAllcheckbox,deleteProduct } from "../store/cartStore"
import '../style/cart.css'
import Header from '../header/header'

export default function Cart(){
const cartProducts=useSelector(selectCartProducts);
const dispatch=useDispatch()

const [chechedAll,setCheckedAll]=useState(true)
function chooseAllProducts(){
   setCheckedAll(!chechedAll)
   dispatch(changeAllcheckbox(chechedAll))
}

const a=cartProducts.map(item=>{
   let res=0;
   if(item.checked){
      res=(item.price*item.count)
   }
   return res
})
const totalCost=a.reduce((sum,el)=>sum+el,0)
const b=cartProducts.map(item=>{
   let res=0;
   if(item.checked){
      res=item.count
   }
   return res
})
const totalProducts=b.reduce((sum,count)=>sum+count,0)


   return(
   <>
   <Header/>
   <div className="root_container">
   <h2>Cart</h2>
   <Link to="/">Вернуться к покупкам</Link>
   <div>
      <label> Choose all products
         <input type="checkbox" checked={chechedAll} onChange={()=>chooseAllProducts()}/>
      </label>
   </div>
    
   
   <section >
      <div>
         {cartProducts.map(prod=>
         <div 
         key={prod.id}
         className='cardProduct'
         >
            <Link to={`products/${prod.id}`} className="link">
               <div className="cardProduct-image">
                  <img src={prod.thumbnail} alt='image'/>
               </div>
            </Link> 
            <div className="cardProduct-text">
               <div>
                  <h6>{prod.title}</h6>
                  <p>brand:{prod.brand}</p>
                  <p>{prod.description}</p>
                  <div className="cardProduct-count">
                     <span onClick={()=>dispatch(decrement(prod))}>-</span>
                     <span>{prod.count}</span>
                     <span onClick={()=>dispatch(increment(prod))}>+</span> 
                  </div>
            </div>
               <div className="cardProduct-price">
                  <span className="priceBefore">{ (Math.round(prod.price*100/(100-prod.discountPercentage)))*prod.count } $</span>
                  <span className="priceAfter"> {prod.price*prod.count} $</span>
                  <i className="bi bi-trash3" onClick={()=>dispatch(deleteProduct(prod.id))}/>
               </div>
            </div>
            <div>
               <input type="checkbox" checked={prod.checked}  onChange={()=>dispatch(changeCheckbox(prod.id))}/>     
            </div>
         </div>
         )}
      </div>
    {cartProducts.length>0 ? 
    <div className="total-information">
         <h6>Total : <span>{totalCost} $</span></h6>
         <h6>Products : <span>{totalProducts}</span> </h6>
         <div>CHECKOUT</div>
      </div>:
      <div><p>CART IS EMPTY</p></div>
    }
   </section>


   </div>
  
   
   </>
)


}