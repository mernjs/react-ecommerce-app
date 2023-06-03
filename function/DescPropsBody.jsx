import React from 'react'

function DescPropsBody(props) {
    const{name, address}= props
  return (
    <div>
      <h3>Destructuring using function body : Name {name},Address {address}</h3>
    </div>
  )
}

export default DescPropsBody
