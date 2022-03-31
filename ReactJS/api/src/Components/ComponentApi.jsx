import React, { Component } from 'react';  
import ReactDOM from 'react-dom';  

class ComponentAPIDemo extends Component {  
   constructor() {  
      super();  
      this.findDomNode1 = this.findDomNode1.bind(this);  
      this.findDomNode2 = this.findDomNode2.bind(this);  
   };  
   findDomNode1() {  
       var demoDiv1 = document.getElementById('demoDiv1');  
       ReactDOM.findDOMNode(demoDiv1).style.color = 'red';  
   }  
   findDomNode2() {  
       var demoDiv2 = document.getElementById('demoDiv2');  
       ReactDOM.findDOMNode(demoDiv2).style.color = 'blue';  
   }  
   render() {  
      return (  
         <div>  
             <button onClick = {this.findDomNode1}>FIND DOM(Document Object Model) NODE 1</button>&nbsp;&nbsp;
             <button onClick = {this.findDomNode2}>FIND DOM(Document Object Model) NODE 2</button>  
             <h3 id = "demoDiv1">Demo Node 1</h3>  
             <h3 id = "demoDiv2">Demo Node 2</h3>  
         </div>  
      );  
   }  
}  
export default ComponentAPIDemo;  