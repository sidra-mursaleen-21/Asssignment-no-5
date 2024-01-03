import React from 'react'

function Logo(prop) {
  return (
    <div className='logo' >
      <img height={"80px"} src={prop.image} alt="logo"/>
      <h1>daxone</h1>
    </div>
  )
}

export default Logo
