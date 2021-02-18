import React from "react";
import "./menuitem.styles.scss";

export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">SNEAKERS</h1>
        <span className="subtitle">{title}</span>
      </div>
    </div>
  );
};
