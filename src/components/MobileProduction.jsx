import React from "react";
import "./Mobile.css";

const arr = ["Samsung", "HTC", "Micromax", "Apple"];
const MobileProduction = () => {
  return (
    <div className="container">
      <h2 style={{ marginLeft: "20px" }}>Mobile Manufacturers</h2>
      <ul>
        {arr.map((e) => (
          <li className="list">{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default MobileProduction;
