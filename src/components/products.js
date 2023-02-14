import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { selectProducts,fetchProducts} from "../store/productStore";
import '../style/products.css'
import Header from "../header/header";
import { selectSearch } from "../store/searchStore";
import CardLayout from "./cardLayout";
import { clearSearchProducts } from "../store/searchStore";

export default function Products( ){
   const products=useSelector(selectProducts);
   const dispatch=useDispatch();
   const searchProduct=useSelector(selectSearch);

   useEffect(()=>{
      dispatch(fetchProducts())
   },[dispatch])
 
   return(
   <div className="root_container ">
      <Header/>
      {searchProduct.length>0? <p onClick={()=>dispatch(clearSearchProducts())} className="goMainPage">GO BACK MAIN PAGE</p>: ''}    

      <div className="card-conteiner d-flex flex-wrap m-auto w-75">
         {searchProduct.length>0 ?
         searchProduct.map(product=>
            <CardLayout product={product}/>):
         products.map(product=>
            <CardLayout product={product}/>)   
         }
      </div>
   </div>
   )
}