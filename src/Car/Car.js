import  React from 'react'
//
// function Car() {
//     return (
//         <h2>component Car</h2>
//     )
// }

export default (props) => {
   return (
       <div>
           <h3>car name: {props.name}</h3>
           <p>Year: {props.year}</p>
           <button onClick={props.onChangeTitle}>click</button>
       </div>
   )
}
