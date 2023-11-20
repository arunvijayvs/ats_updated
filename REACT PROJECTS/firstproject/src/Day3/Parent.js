import React from 'react'

export default function Parent() {
  return (
    <div>
      Parent
      <Child name="Balaji" />
    </div>
  )
}
function Child(props)
{
    return(
        <div>
            <h1>My name is {props.name}</h1>
        </div>
    )
}