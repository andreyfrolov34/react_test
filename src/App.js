import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car'
import Counter from './Counter/Counter'

class App extends Component { // иногда можно увидеть объявление компонентов с применением constructor'a, обязательно прописывать super() и пробрасывать туда props
                                // state определять через this  this.state...
                                // не стоит часто использовать такой подход т.к он нагружает систему...
                                // применять когда нужно использовать жизненые циклы в компоненте...
                                // жизненые циклы работают только в комп-х наследованых из react компонента !!! import React, { Component } from 'react';
    constructor(props){

        super(props)
    
        this.state = {
            clicked: false,
            cars: [
                {name: 'Bmw', year: 2010},
                {name: 'Audi', year: 2018},
                {name: 'Ford', year: 2017}
            ],
            showCars: false,
            pageTitle: 'Component page'
        }
    }

    deleteHandler(i) {
        // при использовании обычной ф-ии, в компоненте нужно исп-ть bind(this) или исп-ть: () => {}
        const newCars = this.state.cars.concat()// копируем в newCars state.cars (еще один способ клонирования state в новую переьенную 1 способ !!!)
        newCars.splice(i, 1)
        this.setState({
            cars: newCars
        })
    }
    toggleCarsHandler = () => {
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
    };
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
                        index={i}
                        name={car.name}
                        year={car.year}
                        onChangeName={(event) => this.onChangeName(event.target.value, i)}
                        onDelete={this.deleteHandler.bind(this, i)}
                    />
                )
            })
        };
        return (
        <div style={divStyle}> 
            {/*поле title пробрасывается сюда из index.js, т.к props не оределён в App компоненте к props нужно обращаться через this !!! */}
            <h1> {this.props.title}</h1> 
            <button className="btn btn-secondary mx-auto mb-3 AppButton"
                    type="button"
                    onClick={this.toggleCarsHandler}
            >
                show cars
            </button>
            <button onClick={() => {this.setState({clicked: true})}}>clicked</button>
            <Counter clicked = {this.state.clicked}/>
            {/* 'car' определяется выше либо это null либо массив с данными. оч. удобно !!! */}
            {car}
        </div>
        );
    }
    
}

export default App;
