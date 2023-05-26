import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
    <Link to={`/MovieList`}><button className='button-home'>View movie list</button></Link>
    <div className='img_home'>
    <img src="https://s3.amazonaws.com/libapps/accounts/28850/images/Film_Reel.jpg" alt="404"></img>
     
    </div>
      
    </div>
  )
}

export default Home
