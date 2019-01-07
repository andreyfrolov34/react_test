import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'
import Heading from './Car/Heading'

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



   changeTitleHandler = (pageTitle) => {
       this.setState({
           pageTitle
       })
   };

   handlerVisual = () => {
       this.setState({
           showCars : !this.state.showCars
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
                      name={car.name}
                      year={car.year}
                      onChangeTitle={() => this.changeTitleHandler(car.name)}
                  />
              )
          })
      }

    return (
      <div style={divStyle}>
        <Heading
            title={this.state.pageTitle}
            handlerVisual={this.handlerVisual.bind(this)}
        />
          {/*{this.state.showCars ? cars.map((car, i) => {*/}
              {/*return (*/}
                  {/*<Car*/}
                    {/*key={i}*/}
                    {/*name={car.name}*/}
                    {/*year={car.year}*/}
                    {/*onChangeTitle={() => this.changeTitleHandler(car.name)}*/}
                  {/*/>*/}
              {/*)*/}
          {/*}) : null}*/}
          {car}
      </div>
    );
  }
}

export default App;
