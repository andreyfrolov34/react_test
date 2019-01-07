import  React from 'react'

export default (props) => {
  return (
      <div>
          <h1> {props.title}</h1>
          <div className="input-group mb-3 mx-auto" style={{width: 500}}>
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
