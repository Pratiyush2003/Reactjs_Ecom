import React, { useEffect, useState } from 'react'
import Navbar from './Shopping app/FrontPage/Navbar'
import { 
        BrowserRouter as Router,
        Route,
        Routes
        } from 'react-router-dom'
import HomePage from './Shopping app/FrontPage/HomePage'
import CompanyColab from './Shopping app/FrontPage/CompanyColab'
import Product from './Shopping app/Products page/Product'
import { items } from './Data'
import ProductDetails from './Shopping app/Products page/ProductDetails'
import SearchResult from './Shopping app/Products page/SearchResult'
import Cart from './Shopping app/Cartpage/Cart'
import Footer from './Shopping app/FrontPage/Footer'
import OrderReview from './Shopping app/Cartpage/OrderReview'
import Login from './Shopping app/LoginRegister/Login'
import Register from './Shopping app/LoginRegister/Register'


const PathControl = () => {
    
    const [data, setData] = useState([...items])
    const [cart, setCart] = useState(()=>{
       return JSON.parse(localStorage.getItem('cart'))
    });


    useEffect(()=>{
      localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    const [user, setUser] = useState('')

  return (
    <>
        <Router>
            <Navbar setData = {setData} cart = {cart} user = {user} setUser = {setUser} />
            <Routes>
                <Route path='/' element = {<HomePage/>}></Route>
                <Route path='/Company/:term' element = {<CompanyColab/>}></Route>
                <Route path= '/product' element = {<Product items = {data}/>}> </Route>
                <Route path='/productDetails/:id' element = {<ProductDetails cart = {cart} setCart = {setCart}/>}></Route>
                <Route path='/searchResult/:product' element = {<SearchResult/>}></Route>
                <Route path='/cart' element = {<Cart cart = {cart} setCart = {setCart} user = {user}/>}></Route>
                <Route path='/OrderReveiw' element = {<OrderReview cart = {cart}/>}></Route>
                <Route path='/login' element = {<Login/>}></Route>
                <Route path='/register' element = {<Register/>}></Route>
            </Routes>
            <Footer></Footer>
        </Router>
      
    </>
  )
}

export default PathControl
