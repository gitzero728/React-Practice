import React from "react";
import "./ZeroAvatar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectImage } from "../../features/imageSlice";
import { useData } from "../../DataContext";

function ZeroAvatar() {
  const data = useData();
  const dispatch = useDispatch();
  const selectedIndex = useSelector((state) => state.image.selectedIndex);

  const handleImageClick = (index) => {
    dispatch(selectImage(index));
  };

  return (
    <div className="zero-avatar-container">
      <h1>ZeroAvatar</h1>
      <div className="zero-avatar-grid">
        {data.map((item, index) => (
          <div
            className={`zero-card ${selectedIndex === index ? "selected" : ""}`}
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <h2>{item.title}</h2>
            <img className="zeroAvatar" src={item.url} alt={item.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ZeroAvatar;
