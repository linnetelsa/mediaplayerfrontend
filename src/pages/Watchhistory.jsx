import { faHome, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryApi } from '../Services/allApi'
import { getVideoHistoryApi } from '../Services/allApi'



function Watchhistory() {
  const [allVideo,setAllVideo]=useState([])




  const getVideoHistory=async()=>{
    const result= await getVideoHistoryApi()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAllVideo(result.data)
    }
    console.log(allVideo);

   const handleDeleteVideo =async(id)=>{
    await deleteVideoHistoryApi(id)
    getVideoHistory()
   }




    useEffect(()=>{
       getVideoHistory()
    },[])
  }
  return (
    <>
     <div className="row w-100 my-5">

     <div className='d-flex justify-content-between p-md-5'>
    
     
     </div>



      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h5 className='text-center'>Watch History</h5>
        {allVideo.length>0?
        <table className='table'>
          <thead>
            <tr>
              <th>sl.no</th>
              <th>Caption </th>
              <th>Url</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
             allVideo?.map((item,index)=>(
             <tr>
              <td>{index+1}</td>
              <td>{item.caption}</td>
              <td><Link to={item.url} target='_blank'> {item.url} </Link> </td>
              <td>{item.timeStamp}</td>
              <td><button className='btn btn-danger'onClick={()=>handleDeleteVideo(item.id)}>
                <FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>)) }
             
          </tbody>

        </table>
        :
        <p className='text-danger fs-3'>No watch history</p>}
      </div>
      <div className="col-md-2"></div>


     </div>
    </>
  )
}

export default Watchhistory