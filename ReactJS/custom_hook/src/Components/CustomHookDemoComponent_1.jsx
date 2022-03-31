import React from "react";
  
import useCustomReactHook from "./useCustomReactHook";
  
function CustomHookDemoComponent_1(props){
  
   const clickedButton = useCustomReactHook(0 , "CustomHookDemoComponent_1"); 
      
    return (
        <div>
            <h1> This is the CustomHookDemoComponent_1</h1>
            <button onClick={clickedButton}> Click here!</button>
        </div>
    );
}
  
export default CustomHookDemoComponent_1;