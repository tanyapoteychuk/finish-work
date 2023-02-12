import 'bootstrap/dist/css/bootstrap.css';
import HeaderCategory from './HeaderCategory';
import { NavLink } from 'react-router-dom';
import Search from './search';
import "../style/header.css"
import logo from "../header/logo.png"
export default function Header(){
  
   return(

<header className="p-2 text-bg-dark position-fixed">
        <div className="container">
            <div className='header_logo'>
                <img src={logo}/>
            </div>
            <HeaderCategory/>
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 text-white">Телефоны</a></li>
                </ul>
                <Search/>
                <div className="text-center">
                    <button type="button" className="btn btn-outline-light me-2">Login</button>
                    <button type="button" className="btn btn-outline-light me-4 sign-up">Sign-up</button>
                </div>
               
               
            </div>
             <button type="button" className="btn position-relative">
                    <NavLink to={`/cart`}><i className="bi bi-cart-fill w-100 sing-cart" ></i></NavLink>
            </button>
        </div>
        
</header>
 
      
     
   )
}