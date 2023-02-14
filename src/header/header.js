import 'bootstrap/dist/css/bootstrap.css';
import HeaderCategory from './HeaderCategory';
import { NavLink } from 'react-router-dom';
import Search from './search';
import "../style/header.css"
import logo from "../header/logo.png"
import SignUp from '../components/auth/sign-up';
import { useState } from 'react';
import Login from '../components/auth/login';


export default function Header(){
const [activeSignUp,setActiveSignUp]=useState(false) 
const [activeLogin,setActiveLogin]=useState(false) 
   return(

<header className="p-2 text-bg-dark position-fixed ">
       
        <div className="d-flex justify-content-between ">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end me-2">
               <div className='header_logo me-4'>
                <NavLink to='/' ><img src={logo}/></NavLink>
            </div>
            <HeaderCategory/>     
            </div>
            <div className="buttons">
                <Search/>
                <div className="auth">
                    <NavLink to={'/login'}>
                        <button type="button" className="btn btn-outline-light me-2"
                        onClick={()=>setActiveLogin(!activeLogin)}
                        >Login
                        </button>
                        {activeLogin && <Login/>}
                    </NavLink>
                    
                    <NavLink to={'/sign-up'}>
                        <button type="button" className="btn btn-outline-light me-4 sign-up" 
                        onClick={()=>setActiveSignUp(!activeSignUp)}
                        >Sign-up
                        </button>
                        {activeSignUp && <SignUp/> }        
                    </NavLink>
                   
                </div>

                <button type="button" className="btn position-relative">
                    <NavLink to={`/cart`}><i className="bi bi-cart-fill w-100 sing-cart" ></i></NavLink>
                </button>
                
            </div>
             
        </div>
        
</header>
 
      
     
   )
}