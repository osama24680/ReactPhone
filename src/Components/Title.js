

import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    let {name,title} =this.props
    return (
      <div className="row">
        <div className="my-2 text-center text_title mx-auto col-10">
          <h1 className="text-capitalize font-weight-bold ">
            {name}<strong className='text_blue'>{title}</strong>
          </h1>
        </div>
      </div>
    )
  }
}
