import React from 'react'
function KeyConcept() {
    const myList=[{id:"a", value:"apple"},
                   {id:"b", value:"orange"},
                   {id:"c", value:"mango"},
                   {id:"d", value:"grapes"},
                   {id:"e", value:"pine"}]
    const listItems=myList.map((item)=>
        <li key={item.id}>
            {item.value}
        </li>
    );
  return (
    <ul>
      {listItems}
    </ul>
  )
}
export default KeyConcept;