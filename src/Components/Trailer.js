import React from 'react'
import { useParams } from 'react-router-dom'

const Trailer = ({data}) => {
  const {id}=useParams()
  const found = data.find((element) => element.id==id);
console.log(data)
 
  return (
    <div className='trailer'>
    <iframe width="560" height="315" src={found?.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Trailer