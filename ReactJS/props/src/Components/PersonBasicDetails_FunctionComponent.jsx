import React from 'react';
import ReactDOM from 'react-dom';

function Person(props) {
  return (
    <>
      <h2>My Name is { props.personData.firstName +" "+props.personData.lastName }</h2>;
    </>
  );
}

function PersonBasicDetails() {
  const personInfo = { firstName: "Kahan", lastName: "Chokshi" };
  return (
    <>
	    <Person personData={personInfo} />
    </>
  );
}

ReactDOM.render(<PersonBasicDetails />, document.getElementById('root'));

export default PersonBasicDetails