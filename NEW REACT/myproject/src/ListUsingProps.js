import React from 'react'
function Demo(props) {
  return (
    <>
      my name is {props.name}
      <br></br>
    </>
  )
}
export default function ListUsingProps()
{
    const list=["mango", "orange", "apple"];
   return(
    <>
    {list.map((item)=><Demo name={item}></Demo>)}
    </>
   )
}