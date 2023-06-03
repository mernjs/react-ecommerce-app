import React from 'react'

function EventHandle() {
   function eventHandle(){
    alert("Event Handler")
    }
  return (
    <div>
      <h3>Event Handle : <button onClick={eventHandle}>Click Me</button></h3>
    </div>
  )
}

export default EventHandle
