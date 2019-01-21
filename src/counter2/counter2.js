import React from 'react'

export default props => {
  return (
    <div style={{border: '1px solid #ccc',width: 400,margin:'0 auto'}}>
      <h3>couter2</h3>
      {props.clicked ? <p>Clicked</p> : null} 
    </div>
  )
}