import React from 'react';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kahan Chokshi",
      contactno: "9408097042",
      salary:1000000
    };
  }

 render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <p>
          My contact no. is {this.state.contactno}
        </p>
        <p>
          My salary/month is {this.state.salary}
        </p>
      </div>
    );
  }
}

export default Person;
