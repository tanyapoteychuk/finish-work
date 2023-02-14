import { useDispatch} from "react-redux"
import { authUser } from "../../store/userStore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../../style/login.css'

export default function Login(){

const [userName,setUserName]=useState('')
const [password,setPassword]=useState('')

const dispatch=useDispatch()
const navigate=useNavigate()

function verificationUser(e){
   e.preventDefault()
   dispatch(authUser(userName,password))
   navigate('/')
}
   return(
   <>
  <form onSubmit={(e)=>verificationUser(e)}className="login">
    <input type="text"  id="userName" placeholder="User name" onChange={(e)=>setUserName(e.target.value)} />
    <input type="password"id="inputPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    <button type="submit" className="btn btn-outline-light me-2 buttonLogin">Login</button>

  </form>
   </>

   )
}