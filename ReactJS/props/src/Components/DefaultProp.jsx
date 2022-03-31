import React, { Component } from 'react';
  
class PersonDefaultDemo extends Component {
  render() {
    return (
      <div>
        <div>Name: {this.props.name} </div>
        <div>Gender: {this.props.gender}</div>
        <hr/>
      </div>
    )
  }
}

PersonDefaultDemo.defaultProps = {
  name: "Legend",
  gender:"Male"
}
  
export default PersonDefaultDemo;