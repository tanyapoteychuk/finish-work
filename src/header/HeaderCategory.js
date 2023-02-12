import { selectProducts} from "../store/productStore";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import "../style/headerCategory.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderCategory(){
   const products=useSelector(selectProducts);
   
   const arrCateg=[]
   products.map(prod=>
      arrCateg.push(prod.category))
   const categories=Array.from(new Set(arrCateg)) 
   const [active,setActive]=useState(false)   
   return(
      <>
      <div className="container_menu">
         <div 
         className="menu-btn"
         onClick={()=>{
            setActive(!active)
         } }
         >
         <span></span>
         <span></span>
         <span></span>
         </div>
         <h4>Catalog</h4> 
      </div>
      {active? 
      <div  className="menu">
         <nav className="p-3 text-bg-dark">
            <ul>
            {categories.map(category => 
               <NavLink to={`/products/category/${category}`} onClick={()=>setActive(false)} style={{textDecoration:'none'}}> 
                  <li className="menu-category">{category}</li> 
               </NavLink>   
            )}
            </ul>
         </nav>
      </div>:
      ""
      }

      </>
      
   )

}