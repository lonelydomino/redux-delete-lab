import React from 'react'
const Band = (props) => {
    debugger
     return (
         <div>
             <li>{props.band.name}</li><button onClick={() => props.deleteBand(props.id)}>DELETE</button>
         </div>
     )
}
export default Band