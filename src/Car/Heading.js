import  React from 'react'

export default (props) => {
  return (
      <div>
          <h1> {props.title}</h1>
          <div className="input-group mb-3 mx-auto" style={{width: 500}}>
              {/*<input type="text" className="form-control mr-3" onChange={this.handleInput} />*/}
              <button className="btn btn-secondary mx-auto"
                      type="button"
                      onClick={props.handlerVisual}
              >
                  show cars
              </button>
          </div>
      </div>
  )
}
