import { useState} from "react"
import { useDispatch } from "react-redux";
import { fetchSearch } from "../store/searchStore";


export default function Search(){
 
   const [value,setValue]=useState('')
   const dispatch=useDispatch();
function handleSubmit(e){
   e.preventDefault()
   dispatch(fetchSearch(value))
   setValue('')
}
   

return(

  <form 
  className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" 
  role="search"
  onSubmit={(e)=>handleSubmit(e)}>
      <input 
      type="search" 
      className="form-control form-control-dark " 
      placeholder="Search..."
      aria-label="Search"
      onChange={(e)=>setValue(e.target.value)}/>
   </form> 
   // <form onSubmit={(e)=>handleSubmit(e)}>
   //    <input type="text" onChange={(e)=>setValue(e.target.value)}/>
      
   // </form>
)

}




// export default function Search(){
// const products=useSelector(selectProducts);
// const [search_input,setSearch_input]=useState('')
// console.log(search_input);
// function handleSubmit(e){
// e.preventDefault()
// }

//    return(
//    <>
   
//    <form onSubmit={(e)=>handleSubmit(e)}>
//          <input type="text" onChange={(e)=>setSearch_input(e.target.value)}/>
         
//       </form>
   
//    {products.filter(product=>{
//       if(search_input===''){
//          return product;
//       }else if(product.title.toLowerCase().includes(search_input.toLowerCase())){
//          return product;
//       }
//    }).map(product=>
//     console.log(product)
//       )
   
//    }
  
//    </>   



//    )
// }

