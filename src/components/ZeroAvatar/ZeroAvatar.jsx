import React from "react";
import "./ZeroAvatar.css";
import { useData } from "../../DataContext";

function ZeroAvatar() {
  const data = useData();
  console.log(data[0]);

  return (
    <div className="zero-avatar-container">
      <h1>ZeroAvatar</h1>
      <div className="zero-avatar-grid">
        {data.map((item, index) => (
          <div className="zero-card" key={index}>
            <h2>{item.title}</h2>
            <img className="zeroAvatar" src={item.url} alt={item.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ZeroAvatar;
