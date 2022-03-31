import React, { Component } from 'react';  
class ForceUpdateStateComponent extends Component {  
   constructor() {  
      super();            
      this.forceUpdateState = this.forceUpdateState.bind(this);  
   }  
   forceUpdateState() {  
      this.forceUpdate();  
   };  
   render() {  
      return (  
         <div>  
             <h3>Random number: {Math.random()}</h3>  
             <button onClick = {this.forceUpdateState}>Force Update State</button>  
         </div>  
      );  
   }  
}  
export default ForceUpdateStateComponent;  