import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <>
    <div className="row w-100 p-5">
      <div className="col-md-4 ">
        <h4 className='text-warning mb-4'><FontAwesomeIcon icon={faVideo} className='me-2' />   Media Player</h4>
        <p style={{textAlign:'Justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, at! Possimus labore ipsam ad sequi quisquam quasi assumenda, repudiandae sint voluptates amet eius eum ullam sunt dignissimos, quos doloremque dicta.</p>
      </div>
      <div className="col-md-2 d-md-flex justify-content-center">
        <div>
        <h4 className='mb-4'>Links</h4>
        <div>
       <Link to={'/'} ><p>Landing Page</p></Link> 
       <Link to={'/home'} ><p>Home</p></Link> 
       <Link to={'/watchhistory'}><p>Watchhistory</p></Link> 
        </div>
        </div>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2 ">
        <div>
      <h4 className='mb-4'>Guides</h4>
        <div>
        <p>React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
        </div>
        </div>
      </div>
      <div className="col-md-3 d-md-flex justify-content-center">
        <div>
        <h4>Contacts</h4>
        <div className="d-flex mt-3">
          <input type="text" className='form-control' placeholder='Email Id' />
          <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className="d-flex justify-content-between mt-4">
        <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
        <FontAwesomeIcon icon={faTwitter} className='fa-2x'  />
        <FontAwesomeIcon icon={faFacebook} className='fa-2x'  />
        <FontAwesomeIcon icon={faLinkedin}  className='fa-2x' />
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer