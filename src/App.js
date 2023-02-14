import Products from "./components/products";
import Product from "./components/product";
import Cart from "./components/cart";
import ProductCategory from "./components/productCategory";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from "./components/auth/sign-up";
import Login from "./components/auth/login";



function App() {
  return (
  <>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Products/>}/>
    <Route path="/products/:id" element={<Product/>}/> 
    <Route path="/products/category/:category" element={<ProductCategory/>}/> 
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/cart/products/:id" element={<Product/>}/> 
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
  </BrowserRouter>  

  </>  
  
  
  );
}

export default App;
