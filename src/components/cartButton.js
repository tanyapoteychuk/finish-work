import { useDispatch} from "react-redux"
import {addedProductInCart} from  "../store/cartStore";

import 'bootstrap-icons/font/bootstrap-icons.css';
import '../style/cardButton.css'
export default function CartButton(product){
   const dispatch=useDispatch()
   
   const chooseProduct=(product)=>{
    product={
      ...product.product,
      count:1,
      checked:true
    }
      dispatch(addedProductInCart(product))
    }

   return(
      <div
      onClick={()=>{chooseProduct(product)}}
      className='card-button'
      >
        <span>ADD CARD</span>
      </div>
     
   )
}