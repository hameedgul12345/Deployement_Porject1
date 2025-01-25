import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
  return (
   <>
   <Link to={'/'}>Home</Link>
   <Link to={'/services'}>Services</Link>
   
   </>
  )
}

export default Links