import React from 'react'
import Props from './function/Props'
import DescProps from './function/DescPropsParam'
import DescPropsBody from './function/DescPropsBody'
import EventHandle from './function/EventHandle'


function AppFunction() {
  return (
    <div>
     <Props name="Shashi" city="Lucknow"/>
     <DescProps name="shashi" city="Gorakhpur"/>
     <DescPropsBody name ="shashi" address="Campierganj"/>
     <EventHandle/>
    </div>
  )
}

export default AppFunction
