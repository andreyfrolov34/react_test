import  React from 'react'
import PropTypes from 'prop-types' // либа для валидации полей
import withClass from '../hoc/withClass'
// import Radium from 'radium' // для удобной работы с инлайн стилями можно использовать пакет 'radium' !!! export компонента оборачивается - export default Radium(Car)
import classes from './Car.module.scss' // работа со стилями в js ,модульность!!! добавляет data-atribut in html классы не повторяются...
// import '../App.scss' // импорт стилей из главного scss файла (обычная работа со стилями...)
class Car extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef() // создание референции 

  }

  componentDidMount() {
    if(this.props.index === 1) {
      this.inputRef.current.focus() // навешиваем на текущую референцию ф-ию focus()
    }
  }

  render() {
    const inputClases = [classes.input] // динамическое добавление классов
    if (this.name !== '') {
      inputClases.push(classes.green)
    } 
    else {
      inputClases.push(classes.red)
    }
  
    if (this.props.name.length > 5) {
      inputClases.push(classes.bold)
    }
    // благодаря Radium в инлайн стилях можно применять :hover !!!
    // const style = {
    //   ':hover':{
    //     boxShadow: '0 4px 15px 0 rgba(0, 0, 0, 0.34)'
    //   }
    // }
    
    return (  
      <> 
      {/* такой синтаксис <></> можно исп-ть если нет необходимости заворачивать компонент в div etc. */}
        <h3>car name: {this.props.name}</h3>
        <p>Year: {this.props.year}</p>
        {/* массив inputClases разворачиваеттся в строку при помощи join(' ') */}
        <input 
          className={inputClases.join(' ')}
          type='text'
          onChange={this.props.onChangeName}
          value={this.props.name} 
          ref={this.inputRef}
        />
        <button className="btn btn-secondary mx-auto" onClick={this.props.onDelete}>delete car</button>
      </>
    )
  }
}

// export default Radium(Car) Radium исп-ся для удобной работы со стилями

// валидация проперти с prop-types. может исп-ся только в компонентах 
Car.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

// комп.высш.порядка => как фун-я обертка
export default withClass(Car, classes.Car)
