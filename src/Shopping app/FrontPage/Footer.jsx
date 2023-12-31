import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
  <div className="col-md-4 d-flex align-items-center">
    <a href="/" className="mb-3 me-2 mb-md-0 text-body-dark text-decoration-none lh-1">
      <svg className="bi" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
    </a>
    <span className="mb-3 mb-md-0 text-body-primary text-primary">© 2023 Company, Inc</span>
  </div>
  <ul className="nav col-md-4 justify-content-end list-unstyled d-flex p-5">
    <li className="ms-3"><a className="text-body-primary" href="#"><i className='bi bi-facebook js-icon'></i></a></li>
    <li className="ms-3"><a className="text-body-primary" href="#"><i className='bi bi-twitter js-icon'></i></a></li>
    <li className="ms-3"><a className="text-body-primary" href="#"><i className="bi bi-instagram js-icon"></i></a></li>
  </ul>
</footer>

    </div>
  )
}

export default Footer
