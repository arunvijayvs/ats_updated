import React from 'react'

export default function DefaultProps(props) {
  return (
    <div>
      <h1>Hi! My name is {props.name} and I am from {props.country}</h1>
    </div>
  )
}
DefaultProps.defaultProps={
    name:"Sachin",
    country:"India"
}
