import React from "react";
  
import useCustomReactHook from "./useCustomReactHook";
  
function CustomHookDemoComponent_2(props){
  
    const clickedButton = useCustomReactHook(0 , "CustomHookDemoComponent_2"); 
      
    return (
        <div>
            <h1> This is the CustomHookDemoComponent_2</h1>
            <button onClick={clickedButton}> Click here!</button>
        </div>
    );
}
  
export default CustomHookDemoComponent_2;