import React from 'react'

const index = () => {

  const login = () => {
    fetch('http://localhost:80/test/login')
  }

  return (
    <div> 
      <button onClick={()=> login()}>Login</button>
    </div>
  )
}

export default index
