import React from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'

const MovieList = ({data,search,rate,setData}) => {
  return (
    <div className='cards'> 
    <div className='list'> <AddMovie setData={setData} data={data}/></div>
    <div className='list_filter'>
    {data.filter((element)=>element.name.toUpperCase().includes(search.toUpperCase()) && element.rating>=rate).map((element)=><MovieCard key={element.id} element={element}/>)}
    </div>
    
    </div>
  )
}

export default MovieList
