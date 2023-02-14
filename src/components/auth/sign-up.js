import { useDispatch} from "react-redux"
import { fetchUser } from "../../store/userStore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../../style/signUp.css'


export default function SignUp(){

const [userName,setUserName]=useState('')
const [password,setPassword]=useState('')
const [email,setEmail]=useState('')
const dispatch=useDispatch()
const navigate=useNavigate()
function getSubmit(e){
   e.preventDefault()
   dispatch(fetchUser({userName,password,email}))
   navigate('/')
}
   return(
   <>
  <form onSubmit={(e)=>getSubmit(e)} className="signUp">
    <input type="text"  id="userName" placeholder="User name" onChange={(e)=>setUserName(e.target.value)} />
    <input type="email"  id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
    <input type="password"id="inputPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    <button type="submit" className="btn btn-outline-light me-2 buttonSing" >Sign-up</button>

  </form>
   </>

   )
}