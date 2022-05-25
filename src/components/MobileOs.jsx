import React from "react";
const arr = ["Android", "Blackberry", "Iphone", "Window Phone"];

const MobileOs = () => {
  return (
    <>
      <div style={{display:"block"}}>
        <h2 style={{ marginLeft: "20px" }}>Mobile Operating System</h2>
        <ul>
          {arr.map((e) => (
            <li key={e} style={{listStyleType:"square"}}>{e}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileOs;
