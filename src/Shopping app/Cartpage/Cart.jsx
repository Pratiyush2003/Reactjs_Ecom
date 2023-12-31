import React, { useEffect, useState } from 'react'
import Nopage from './Nopage'
import ContactForm from './ContactForm'


const Cart = ({cart, setCart, user}) => {
    const [cartTotal, setCartTotal] = useState(0)
    let [productId, setProductId] = useState([])

    
    const getProductId = () => {
        const ids = cart.map((product) => product.id);
        setProductId(`${ids}`);
    };
  
    const calculateTotal = () => {
        let total = cart.reduce((acc, curr) => {
            // Convert the price string to a number using parseFloat
            return acc + parseFloat(curr.price);
        }, 0); // Make sure to provide an initial value for the accumulator
    
        setCartTotal(total);
    };
    
    useEffect(() => {
        calculateTotal();
        getProductId();
    }, [cart]);

    
    const deleteItem = (delid) => {
        const filterProduct = cart.filter((p) => p.id != delid)
        setCart(filterProduct);
    }


  return (
    <>
    {
        cart.length > 0 &&  <ContactForm cartTotal = {cartTotal} 
        productId = {productId} setProductId = {setProductId} user = {user}></ContactForm>
    }
   
    <div className='js-buy-product'>
        
        {
        (!cart.length) ? <Nopage></Nopage> :  
        
        <div className="js-container text-center">
        {
            cart.map((p) => {
                return(
                    <div className="card mb-3 js-card" style={{maxWidth:"540px"}} key={p.id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src= {p.imgSrc} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{p.title}</h2>
                            <p className="card-text">{p.description}</p>
                            <button className='btn btn-success mx-4'>₹{p.price}</button>
                            <button className='btn btn-danger' onClick={() => deleteItem(p.id)}>Remove</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    

                )
            })
        }
        <button onClick={() => setCart([])} className='btn btn-danger'>Remove All</button>
        </div>
        }
        </div>
        </>
  )
}


export default Cart
