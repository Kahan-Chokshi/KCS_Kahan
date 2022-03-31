import React, { useImperativeHandle, forwardRef, useState} from "react";

const Sidebar=forwardRef((props,ref)=>{

    const [visibility,setVisibility]=useState(null)
    
    useImperativeHandle(ref,()=>
    ({    
        opensideBar(){
            setVisibility(!visibility)
        }
    }))
     props.setv(visibility)
    return(
     <>
     </>
    )
});
export default Sidebar; 