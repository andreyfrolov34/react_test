import  React from 'react'
//
// function Car() {
//     return (
//         <h2>component Car</h2>
//     )
// }

export default (props) => {
   return (
       <div className="px-1 py-1 mb-3 mx-auto" style={{width: '300px', border: '1px solid #ccc'}}>
           <h3>car name: {props.name}</h3>
           <p>Year: {props.year}</p>
           <input className="input-group mb-3 mx-auto" type='text' onChange={props.onChangeName} value={props.name} />
           <button onClick={props.onDelete}>delete car</button>
       </div>
   )
}
