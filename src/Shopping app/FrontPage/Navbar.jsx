import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { items } from '../../Data'
import { getAuth  } from 'firebase/auth'


const Navbar = ({setData, cart, user, setUser}) => {
  
  const auth = getAuth();
  useEffect(() => {
    if (auth.currentUser && auth.currentUser.email !== null) {
      setUser(auth.currentUser.email);
    } else {
      setUser('No User');
    }
  }, [auth.currentUser]);
 
  const logOut = async () => {
      await auth.signOut()
      navigate('/')
  }
    

    console.log(user)
    const filterByCategory = (category) => {
      const filterProduct = items.filter((p) => p.category === category)
      setData(filterProduct)
    }

    const navigate = useNavigate();
    
    const [searchProducts, SetSearchProduct] = useState('');

    const submitHandler = (e) => {
          e.preventDefault();
          navigate(`/searchResult/${searchProducts}`)
    }
    
    return (
        <div>
            
            <nav className="navbar navbar-dark bg-dark sticky-top" aria-label="Dark offcanvas navbar">
              <div className="container-fluid">
              <Link to={'/'}> <img src="https://wallpapers.com/images/hd/big-red-and-black-asus-rog-logo-wd5mu5ui770ofwzz.jpg" alt="..."  height = '45px' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">
                    <Link to = {'/cart'}> <button type="button" className="btn btn-primary">
                    <i className="bi bi-cart-fill js-cart-icon"></i> <span className="badge text-bg-secondary">{cart.length}</span>
                    </button></Link> 

                    </h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item mb-3">
                       <Link to={'/product'}><button className='btn btn-outline-primary'>Product</button></Link>
                      </li>
                      <li className="nav-item">
                          <Link to={'/OrderReveiw'}><button className='btn btn-outline-primary'>Order</button></Link> 
                          </li>
                          <li className="nav-item mt-3">
                          <Link to={'/login'}><button className='btn btn-outline-primary'>Login</button></Link> 
                          </li>
                          <li className="nav-item mt-3">
                          <button className='btn btn-outline-danger' onClick={logOut}>Logout</button>
                          </li>
                      <li className="nav-item dropdown mt-4">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter
                        </a>
                        <ul className="dropdown-menu mx-2" style={{cursor : 'pointer'}}>
                          <li><a className="dropdown-item " onClick={() => filterByCategory('laptops')}><i className="bi bi-laptop"></i> Laptops</a></li>
                          <li><a className="dropdown-item"  onClick={() => filterByCategory('mobiles')}><i className="bi bi-phone"></i> Mobile</a></li>
                          <li><a className="dropdown-item"  onClick={() => filterByCategory('tablets')}><i className="bi bi-tablet"></i> Tablet</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          
                          <li><a className="dropdown-item" onClick={() => setData(items)}><i className="bi bi-x-square"></i> Remove Filter</a></li>
                        </ul>
                      </li>
                
                    </ul>
                    <form className="d-flex mt-3" role="search" onSubmit={submitHandler}>
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value = {searchProducts} onChange={(e) => SetSearchProduct(e.target.value)}/>
                      <button className="btn btn-outline-primary" type="submit"><i className='bi bi-search'></i></button>
                    </form>

                    <h5 className='mt-4'>{user}</h5>
                  </div>
                  
                </div>
              </div>
            </nav>


        </div>
    )
}

export default Navbar
