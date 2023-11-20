import React from 'react'

export default function DynamicRendering({isLoggedIn}) {
  return (
    <div>
      {isLoggedIn  ? <p><b>Welcome</b></p> : <p><b>Please login</b></p>}
    </div>
  )
}
