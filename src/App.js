import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
   state = {
       cars: [
           {name: 'Bmw', year: 2010},
           {name: 'Audi', year: 2018},
           {name: 'Ford', year: 2017}
       ],
       showCars: false,
       pageTitle: 'Component page'
   };

   deleteHandler(i) {// при использовании обычной ф-ии, в компоненте нужно исп-ть bind(this) или исп-ть: () => {}
       const newCars = this.state.cars.concat()// копируем в newCars state.cars (еще сппособ клонирования state в новую переьенную!!!)
       newCars.splice(i, 1)
       this.setState({
           cars: newCars
       })
   }

   toggleCarsHAndler = () => {
       this.setState({
           showCars : !this.state.showCars
       })
   };
    onChangeName(name, i) {
        const car = this.state.cars[i] // находим элемент по индексу
        car.name = name //  в поле name элемента присваем новое значение из инпута
        const newCars = [...this.state.cars] // спред опрератор разворачивает  state.cars в переменую.(клонирует)
        newCars[i] = car // в новом массиве(в элементе по индексу) присваиваем новый элемент... TODO
        this.setState({ // записываем все значения в setState (!!! примое присваивание запрещено !!!)
            cars: newCars
        })
    }



  render() {
    const divStyle = {
      textAlign: 'center'
    };

    const cars = this.state.cars

      let car = null
      if (this.state.showCars) {
          car = cars.map((car, i) => {
              return (
                  <Car
                      key={i}
                      name={car.name}
                      year={car.year}
                      onChangeName={(event) => this.onChangeName(event.target.value, i)}
                      onDelete={this.deleteHandler.bind(this, i)}
                  />
              )
          })
      }

    return (
      <div style={divStyle}>
        
          <h1> {this.props.title}</h1>
          <div className="input-group mb-3 mx-auto " style={{width: 500}}>
              <button className="btn btn-secondary mx-auto"
                      type="button"
                      onClick={this.toggleCarsHAndler}
              >
                  show cars
              </button>
          </div>
          <div style={{}}>
            {car}
          </div>
      </div>
    );
  }
}

export default App;
