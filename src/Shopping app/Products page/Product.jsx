import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ items }) => {
   
    return (
        <>
            <div className='container '>
                <div className="row row-cols-1 row-cols-sm-2  row-cols-lg-3  g-4 pt-5 px-2">
                    {
                        items.map((p) => {
                            return(
                                <div className="col text-center" key={p.id}>
                                    <div className="card">
                                        <img src= {p.imgSrc} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{p.title}</h5>
                                            <Link to = {`/productDetails/${p.id}`} ><button className='btn btn-primary m-2'>View</button></Link>
                                            <button className='btn btn-success m-2'>₹{p.price}</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    

                </div>



            </div>
        </>
    )
}

export default Product
