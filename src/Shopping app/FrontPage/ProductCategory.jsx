import React from 'react'
import { Link } from 'react-router-dom'

const ProductCategory = () => {
  return (

    <div>
      <h2 className='display-5 fw-bold text-body-emphasis text-center p-5'>Product Category</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mx-4 d-flex flex-wrap align-items-center justify-content-evenly">
  <div className="col">
    <div className="card text-center">
      <img src="https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg " className="card-img-top" alt="..." />
      <div className="card-body ">
        <Link to={'/searchResult/tablets '}> <button className='btn btn-primary'>Tablets</button></Link>
    </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center">
      <img src="https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg" className="card-img-top" alt="..." />
      <div className="card-body ">
        <Link to={'/searchResult/phone'}><button className='btn btn-primary'>Phone</button></Link> 
    </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center">
      <img src="https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg" className="card-img-top" alt="..." />
      <div className="card-body ">
        <Link to={'/searchResult/laptops'}><button className='btn btn-primary'>Laptops</button></Link> 
    </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default ProductCategory
