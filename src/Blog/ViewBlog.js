import React, { useContext } from 'react'
import { MyContext } from '../Context/Context'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';


function ViewBlog() {
    const {title}=useContext(MyContext);
    const navigate=useNavigate()
    const {id}=useParams()
    const listitem=title.filter(h=>h.id==id)
  return (
    <div className='main'>
      <div>
        <h1>{listitem[0].title}</h1>
        <h2>{listitem[0].blog}</h2>
        <button type='button' onClick={()=>navigate('/')}>Back</button>
      </div>
    </div>
  )
}

export default ViewBlog
