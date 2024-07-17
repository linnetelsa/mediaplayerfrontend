import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
   <Row className='w-100 mt-5 d-flex justify-content-center align-item-center ps-4'>
    <Col md={1} ></Col>
    <Col md={5}  className='p-3'>
   <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
   <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorum fuga quibusdam in tempore provident itaque voluptatem unde dolore numquam voluptas, exercitationem obcaecati eum similique, necessitatibus explicabo! Itaque, commodi suscipit.</p>
   <Link to={'/home'}> <button className='btn btn-warning mt-5'>Get Started</button> </Link>
    </Col>
    <Col md={1}></Col>
    <Col md={5} className='d-flex justify-content-center align-item-center'>
    <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" className='w-75' />

    </Col>
   </Row>
   <div className="container">
    <h3 className='text-center my-5'>Features</h3>
    <Row>
      <Col md={1}></Col>
      <Col md={3}>
      <Card style={{ width: '100%' }} className='p-3 mt-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/81/28/a4/8128a49d5f7b10b38d9aa6dd17544198.gif" height={'300px'}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

      </Col>
      <Col md={4} className='px-md-5'>
      <Card style={{ width: '100%' }} className='p-3 mt-3'>
      <Card.Img variant="top" src="https://media1.giphy.com/media/YrIq06kG5yrtxQEhj3/200w.gif?cid=6c09b952jq4p351esquxqzgwdm1qv1z2uphalxtbifwy1i09&ep=v1_gifs_search&rid=200w.gif&ct=g" height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
      </Col>
      <Col md={3}>
      <Card style={{ width: '100%' }} className='p-3 mt-3'>
      <Card.Img variant="top" src="https://www.icegif.com/wp-content/uploads/icegif-248.gif" height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
      </Col>
      <Col md={1}></Col>
    </Row>
   </div>

   <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10 border border-light p-3 my-5 border-2 rounded">
      <div className="row p-4">
        <div className="col-md-6">
          <h3 className='text-warning'>Simple Fast and Powerful</h3>
          <p className='mt-5'> <span className='fs-5'>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Quia distinctio vero, est rem velit quo quam, odit sequi asperiores delectus at. Assumenda ipsam aliquid doloribus, nesciunt sit obcaecati esse et!</p>
          <p> <span  className='fs-5'>Lorem ipsum</span>  dolor sit amet consectetur, adipisicing elit. Incidunt culpa libero minima quas assumenda modi, ad itaque? Ab, similique aspernatur impedit beatae porro temporibus ex eligendi nihil, iusto suscipit dolor?</p>
          <p><span  className='fs-5'>Lorem ipsum</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure, tempora aspernatur deserunt tenetur eius natus unde fugiat molestias blanditiis delectus atque incidunt possimus cum alias quos adipisci. Sint, similique?</p>
        </div>
        <div className="col-md-6">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/DvS1rlMA64c" title="MALABARI BANGER | JOKER , MHR , SA &amp; Dabzee (official audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      </div>
      <div className="col-md-1"></div>
    </div>
   </div>




    </>
  )
}

export default Landing