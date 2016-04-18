import React from 'react'
import $ from 'jquery'

export class Hello extends React.Component {

  render() {
    return(
      <div>
        <h1>Hello from {this.props.framework}!</h1>
      </div>
    )
  }
}

