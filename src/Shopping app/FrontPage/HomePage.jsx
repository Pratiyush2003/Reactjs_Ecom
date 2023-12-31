import React from 'react'
import ProductCategory from './ProductCategory'


const HomePage = () => {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={2000}>
                        <img src="https://c4.wallpaperflare.com/wallpaper/959/271/655/5c1cdef0c8eb3-wallpaper-preview.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
            
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <img src="https://www.ytechb.com/wp-content/uploads/2023/06/watchOS-10-features-5.webp" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i0.wp.com/gbs.com.vn/wp-content/uploads/2023/01/Apple-Watch.jpg?fit=800%2C450&ssl=1" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src="https://img.freepik.com/premium-vector/vector-illustration-lord-ganesh-background-happy-ganesh-chaturthi-hindi-text-om-shree-gan_789916-2384.jpg" alt = "..." width={72} height={57} />
                <h2 className="display-5 fw-bold text-body-emphasis">ABOUT US</h2>
                <div className="col-lg-6 mx-auto">
                    <h3 className="lead mb-4">Hello I am PRATYUSH and this is my shop in which i just sell
                    electroninc product for make your life simple and easier also we are commited to provide.
                    
                    </h3>
                    <button className='btn btn-primary mx-2'><i className='bi bi-instagram '></i></button>
                    <button className='btn btn-primary mx-2'><i className='bi bi-facebook '></i></button>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    </div>
            </div>
            </div>
            <ProductCategory/>
            
        </div>
    )
}

export default HomePage
