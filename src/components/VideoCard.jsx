import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistory, deleteVideo } from '../Services/allApi';


function VideoCard({video,setDeleteVideoStatus,isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{ 
    setShow(true);

    const caption =video?.caption
    const url=video?.embedLink
    const time = new Date()
    console.log(time);
    const timeStamp= new Intl.DateTimeFormat("en-GB",{year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    console.log(timeStamp);

    const reqBody={
    caption,url,timeStamp
    }

       const result= await addVideoHistory(reqBody)
       console.log(result);
  }

  const handleDelete= async(id)=>{
       const result= await deleteVideo(id)
       console.log(result);
       setDeleteVideoStatus(result.data)

  }

  const videoDrag=(e,video)=>{
  console.log(`dragged video details  ${video}`);
  e.dataTransfer.setData("videoDetails",JSON.stringify(video))
  
  }

  return (
    <>
    <Card style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e,video)} className='mt-4'>
     {!isPresent && <Card.Img   onClick={()=>handleDelete(video?.id)}    variant="top" src= {video?.imageUrl} height={'300px'} />}
      <Card.Body>
        
         <div className="d-flex justify-content-between ">
          <Card.Text>{video?.caption}</Card.Text>
          {!isPresent &&
          <Button variant="danger" onClick={()=>handleDelete(video?.id)}><FontAwesomeIcon icon={faTrash} /></Button>
       

           }
        </div>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <iframe width="100%" height="514" src={`${video?.embedLink}?autoplay=1`} title="MALABARI BANGER | JOKER , MHR , SA &amp; Dabzee (official audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Modal>



    </>
  )
}

export default VideoCard