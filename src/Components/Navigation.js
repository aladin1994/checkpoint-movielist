import { Input, Rating } from '@mui/material';
import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navigation = ({setSearch,setRate,rate}) => {
  return (
    <div>
    

    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
      <Link to={`/`}><Nav.Link href="#home">Home</Nav.Link></Link>
   
      </Nav>
      
      <Rating
      onChange={(element)=>setRate(Number(element.target.value))}
      name="simple-controlled"
      value={rate}
     
    />
    <Input placeholder='search' onChange={(element)=>setSearch(element.target.value)}></Input>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navigation