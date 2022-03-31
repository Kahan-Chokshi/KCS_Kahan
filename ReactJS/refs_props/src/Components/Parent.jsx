import React, { useRef } from "react";
import { useState,useEffect } from "react";
import Menu from "./Child";
// import Sidebar from "./SubChild";

function Parent() {
  const Ref = useRef();
  const [vis, setVis] = useState(false);
  const checkVisible = () => {
    setVis(Ref.current.visible);
    console.log("patrent", vis);
  };

  useEffect(()=>{
       console.log(vis); 
       checkVisible()
  },[vis])
  console.log("vis ",vis); 
  // const [visible,setVisible]=useState(null);
  return (
    <>
      <Menu ref={Ref} />
      <button onClick={checkVisible}>Check Visible Parent </button>
      {/* <Sidebar ref={Ref}/> */}
      {vis === true ? (
        <aside className="sidebar">
          <ul className="list-group ">
            <li className=" list-group-item">HOME</li>
            <li className=" list-group-item">ABOUT</li>
            <li className=" list-group-item">SERVICES</li>
            <li className=" list-group-item">CONTACT</li>
            <li className=" list-group-item">GALLERY</li>
          </ul>
        </aside>
      ) : null}
    </>
  );
}
export default Parent;
