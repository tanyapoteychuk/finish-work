import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { selectProducts,fetchProducts,productsStatus} from "../store/productStore";
import Spinner from "./spiner";
import '../style/products.css'
import Header from "../header/header";
import { selectSearch } from "../store/searchStore";
import CardLayout from "./cardLayout";
import { clearSearchProducts } from "../store/searchStore";

export default function Products( ){
   const products=useSelector(selectProducts);
   const status=useSelector(productsStatus);
   const dispatch=useDispatch();
   const searchProduct=useSelector(selectSearch);

   useEffect(()=>{
      dispatch(fetchProducts())
   },[dispatch])
 
   return(
   <div className="root_container">
   <Header/>
   {status==='loading'? <Spinner/>: ''}
   <div className="card-conteiner">
   {searchProduct.length>0? <div onClick={()=>dispatch(clearSearchProducts())}>GO BACK MAIN PAGE</div>: ''}    
   {searchProduct.length>0 ?
   searchProduct.map(product=>
      <CardLayout product={product}/>) :
   products.map(product=>
      <CardLayout product={product}/>)   
   }
      
   </div>
   </div>
   )
}