import { Rating } from '@mui/material'
import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Trailer from './Trailer'

const MovieCard = ({element, data}) => {
  const [click,setClick]=useState()
  return (
    <div className='carde'>
     <img width="167px" height="291px" src={element.image} alt='404'/>
     <div>
     <h4>{element.name}</h4>
     <Rating name="read-only" value={element.rating} readOnly />

     <p style={{marginRight:"20px"}}>{element.description}</p>
     <p>{element.type} </p>
     <p>{element.date}</p>
      <Link to={`/Trailer/${element.id}`}><button >View trailer</button></Link>
   
     </div>
    
    </div>
  )
}

export default MovieCard