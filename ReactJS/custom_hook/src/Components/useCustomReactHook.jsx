import {useState , useEffect} from "react";
  
function useCustomReactHook(init , componentName){
    const [counter , setCounter] = useState(init);
      
    function resetCounter(){
        setCounter(counter + 1);
    }
      
  
    useEffect(() => {
       alert("The button of the " + componentName + " is clicked "+ counter + " times.");
    } , [counter , componentName]); 
      
    return resetCounter;
}
  
export default useCustomReactHook;