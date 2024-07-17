import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { allVideoApi } from '../Services/allApi';



function Add({setAddVideoStatus}) {
const [show, setShow] = useState(false);
const[videoDetails,setVideoDetails]=useState({
caption:"",
imageUrl:"",
embedLink:""
})

console.log(videoDetails);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const getLink=(e)=>{
const link=e.target.value
console.log(link);

if(link.startsWith('https://youtu.be/')){
setVideoDetails({...videoDetails,embedLink:`https://www.youtube.com/embed/${link.slice(17,28)}`})
}
else{
setVideoDetails({...videoDetails,embedLink:`https://www.youtube.com/embed/${link.slice(-11)}`})
}

}
/*  <iframe width="789" height="444" src="https://www.youtube.com/embed/cN6l_eiUkv8" title="MEARN MARCH 24 B1|media player part5|5/7/24| AMIYA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>*/

const handleUpload = async(e)=>{
e.preventDefault()

const result= await allVideoApi(videoDetails)

if(result.status>=200 && result.status<300){
    alert('video added successfully')
    handleClose()
    setAddVideoStatus(result.data)
}
else{
    alert('something went wrong')
    console.log(result);

}
}
return (
<>
<div className="d-flex align-items-center">
<h5>Upload new Video</h5>
<button onClick={handleShow} className='btn fs-5'><FontAwesomeIcon icon={faCloudArrowUp} /></button>
</div>
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className='text-warning'> <FontAwesomeIcon icon={faFilm} className='me-2' />Upload Video</Modal.Title>
</Modal.Header>
<Modal.Body>
<p>Please fill the form</p>
<form className='border p-3 rounded'>
<div className="mb-3">
<input type="text" className='form-control' placeholder='Video Caption' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} />
</div>
<div className="mb-3">
<input type="text" className='form-control' placeholder='Video Image'onChange={(e)=>setVideoDetails({...videoDetails, imageUrl:e.target.value})} />
</div>
<div className="mb-3">
<input type="text" className='form-control' placeholder='Video Url' onChange={(e)=>getLink(e)} />
</div>

</form>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
Cancel
</Button>
<Button variant="warning" onClick={(e)=>handleUpload(e)}>
Upload
</Button>
</Modal.Footer>
</Modal>
</>
)

}
export default Add
