import React from 'react'

export default function Name(props) {
    try{
        if(props.name==="Ajay")
        {
            throw new Error("Ajay name is not accepted")
        }
    }
    catch(error)
    {
        console.log(error);
        document.write("Please enter proper name");
    }
    // finally
    // {
    //     document.write("Always executes")
    // }
  return (
    <>
      <h1>My name is {props.name}</h1>
    </>
  )
}