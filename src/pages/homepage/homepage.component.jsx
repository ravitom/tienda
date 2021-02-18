import React from "react";
import "./homepage.styles.scss";
import MenuDirectory from "../../components/directory/directory.component";

export const HomePage = () => {
  return (
    <div className="home-page">
      <MenuDirectory></MenuDirectory>
    </div>
  );
};
