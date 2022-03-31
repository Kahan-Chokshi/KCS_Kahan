import React from 'react';

class SecondComponent extends React.Component {
  render() {
    const internalcssdemo = {fontSize:'80px',color:'red'}

    // Internal Style
    return <h1 style={internalcssdemo}>Second Component.</h1>;
  }
}


// Named exports are useful to export several values. During the import, one will be able to use the same name to refer to the corresponding value.
// Concerning the default export, there is only a single default export per module. A default export can be a function, a class, an object or anything else. This value is to be considered as the “main” exported value since it will be the simplest to import.
export default SecondComponent;