import React, { useState,useEffect } from 'react'
import { items } from '../../Data';
import { useParams } from 'react-router-dom';
import Product from './Product';


const ProductDetails = ({cart, setCart}) => {
    const {id} = useParams();

    const  [getDetails, setgetDetails] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(()=>{
            const productbyId = items.filter((p)=> p.id == parseInt(id));
            setgetDetails(productbyId[0]);

            const relatedProduct = items.filter((p) => p.category === getDetails.category);
            setRelatedProducts(relatedProduct)

    },[id, getDetails.category])


    const addtoCart = ( id,category,title,imgSrc,amazonLink,description,price) => {
        let obj = {
            id,
            category,
            title,
            imgSrc,
            amazonLink,
            description,
            price
        }
        setCart([...cart, obj])
        
    }
    

    

  return (
    <div>
        <div className="container-fluid ">
        <div className="card mb-3 mt-6" >
            <div className="row g-0">
                <div className="col-md-4 pr-5" style={{paddingLeft : '30px'}}>
                <img src= {getDetails.imgSrc} className="img-fluid rounded-start" alt="..."  />
                </div>
                <div className="col-md-8 text-center">
                <div className="card-body " style={{marginTop : '10%'}}>
                    <h1 className="card-title">{getDetails.title}</h1>
                    <p className="card-text mt-4">{getDetails.description}</p>

                    <button className='btn btn-primary mt-4 mx-2' 
                    onClick={() => addtoCart(getDetails.id, getDetails.category, getDetails.title, getDetails.imgSrc, getDetails.amazonLink,getDetails.description,getDetails.price)}>
                    Buy Now</button>

                    <button className='btn btn-success mt-4 mx-2'>₹{getDetails.price}</button>
                </div>
                </div>
            </div>
            </div>
            <h1 className='text-center mt-5'>Search Related Product</h1>
            <Product items={relatedProducts}/>

        </div>
    </div>
  )
}

export default ProductDetails
