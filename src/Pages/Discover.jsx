import React from 'react'

function Discover() {
  return (
    <>
      <div className="row p-5 d-flex justify-content-end fs-6 fw-bold bg-secondary ">
        <div className="col-12 col-md-6 col-lg-3 mb-4 mt-5 pt-5 ">
          <h5 className="text-uppercase mb-3 text-light fw-bolder">Resources</h5>
          <ul className="list-unstyled">
            {['Demo Drive', 'Insurance', 'American Heroes', 'Learn', 'Video Guides', 'Customer Stories', 'Events', 'Workshops'].map((item, i) => (
              <li key={i}><a href="/" className="text-decoration-none text-light d-block py-1">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4 mt-5 pt-5">
          <h5 className="text-uppercase mb-3 text-light fw-bolder">Location Services</h5>
          <ul className="list-unstyled">
            {['Find Us', 'Find a Collision Center','Find a Certified Installer'].map((item, i) => (
                <li key={i}><a href="/" className="text-decoration-none text-light d-block py-1">{item}</a></li>
              ))}
          </ul>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4 mt-5 pt-5">
          <h5 className="text-uppercase mb-3 text-light fw-bolder">Company</h5>
          <ul className="list-unstyled">
            {['About','Careers','Investor Relations'].map((item, i) => (
              <li key={i}><a href="/" className="text-decoration-none text-light d-block py-1">{item}</a></li>
            ))}
          </ul>
        </div>

      </div>

    </>
  )
}

export default Discover