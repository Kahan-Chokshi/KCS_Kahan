import React, { useImperativeHandle, forwardRef, useState} from "react";

const Sidebar=forwardRef((props,ref)=>{

    const [visibility,setVisibility]=useState(true)
    
    const opensideBar=()=>{
      setVisibility(!visibility)
      console.log(visibility)
    }

    useImperativeHandle(ref,()=>
    ({    
      visibility,
    }));
     
    return(
     <>
      {/* {visibility===true?(
        <aside className="sidebar">
           <ul className="list-group ">
             <li className=" list-group-item">HOME</li>
             <li className=" list-group-item">ABOUT</li>
             <li className=" list-group-item">SERVICES</li>
             <li className=" list-group-item">CONTACT</li>
             <li className=" list-group-item">GALLERY</li>
          </ul>
       </aside>
      ):null} */
      <button onClick={opensideBar}>
        Sidebar
      </button>
      }
     </>
    )
});
export default Sidebar; 