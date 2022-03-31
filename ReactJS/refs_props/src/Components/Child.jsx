import React, {forwardRef} from "react";
import { useImperativeHandle } from "react";
import { useEffect,useState } from "react";
// import Sidebar from "./SubChild";


const Menu=forwardRef((props,ref)=>{

    const [visible,setVisibility]=useState(false)
  
    useImperativeHandle(ref, () =>({
        visible,
    }));
    const updateVisible = () =>{
        setVisibility(!visible)
        console.log(visible);
    }
   

     
    return(
        <>
            {/* {visible===true?(
                <aside className="menu">
                    <ul className="list-group ">
                        <li className=" list-group-item">HOME</li>
                        <li className=" list-group-item">ABOUT</li>
                        <li className=" list-group-item">SERVICES</li>
                        <li className=" list-group-item">CONTACT</li>
                        <li className=" list-group-item">GALLERY</li>
                    </ul>
                </aside>
            ):null} */}
            <button onClick={updateVisible}>Show List</button>
      </>
    )
});
export default Menu; 