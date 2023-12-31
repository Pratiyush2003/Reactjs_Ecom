import React from 'react'

const OrderReview = ({cart}) => {
  return (
    <div>
        <h1 className='text-center mt-4'>Order Summary</h1>
        <div className='js-buy-product'>
        
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
                            <button className='btn btn-success mx-4'>₹{p.price}</button>
                            <div className="progress mt-4" role="progressbar" aria-label="Animated striped example" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{"width":"20%"}} />
                            </div>

                        </div>
                        </div>
                    </div>
                    </div>
                    

                )
            })
        }
      
    </div>
    </div>
</div>
  )
}

export default OrderReview
