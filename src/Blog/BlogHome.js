import React, { useContext } from 'react'
import { MyContext } from '../Context/Context'
import {useNavigate} from 'react-router-dom'

function BlogHome() {
    const {title} = useContext(MyContext);
    const navigate=useNavigate()
  return (
    <div className='main'>
      <button className='button1' onClick={()=>navigate('/blogAdd')} type='button'>ADD</button>
      <div>{title.map((t)=><button className='but3' onClick={()=>navigate(`/viewblog/${t.id}`)}><h1 key={t.id}>{t.title}</h1></button>)}</div>
    </div>
  );
};

export default BlogHome
