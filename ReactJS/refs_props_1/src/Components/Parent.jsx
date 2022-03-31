import React, { useRef, useState } from "react";
import Sidebar from "./Test";

function Parent() {
  const SidebarRef = useRef();
  const [visible, setVisible] = useState(null);
  const set = (newvisible) => {
    setVisible(newvisible);
  };
  console.log(visible);
  return (
    <>
      <button onClick={() => SidebarRef.current.opensideBar()}>
        Show SideBar
      </button>
      <Sidebar ref={SidebarRef} setv={set} />
      {visible === true ? (
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
          <li>GALLERY</li>
        </ul>
      ) : null}
    </>
  );
}
export default Parent;
