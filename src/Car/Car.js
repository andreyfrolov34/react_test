import  React from 'react'
import Radium from 'radium'
import './Car.css'
// для удобной работы с инлайн стилями можно использовать пакет 'radium' !!!
 const Car = (props) => {
  const inputClases = ['input']
  if (props.name !== '') {
    inputClases.push('green')
  } 
  else {
    inputClases.push('red')
  }

  if (props.name.length > 5) {
    inputClases.push('bold')
  }
  const style = {
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
      ':hover': {
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, 0.34)'
      }
  }
	return (

     
		<div className="px-1 py-1 mb-3 mx-auto Car" style={style}>
			<h3>car name: {props.name}</h3>
			<p>Year: {props.year}</p>
			<input className={inputClases.join(' ')} type='text' onChange={props.onChangeName} value={props.name} />
			<button className="btn btn-secondary mx-auto" onClick={props.onDelete}>delete car</button>
		</div>
	)
}

export default Radium(Car)
