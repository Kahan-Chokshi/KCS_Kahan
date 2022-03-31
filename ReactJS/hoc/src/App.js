import React, { Component } from 'react';  
import Hoc from './Components/hoc';  
  
class App extends Component {  
  render() {  
    return (  
      <div>  
        <h2>HOC Example</h2>  
      </div>  
    )  
  }  
}  
App = Hoc(App);  
export default App;