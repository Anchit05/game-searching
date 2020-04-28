import React from "react";
import "../styles/headers/header.scss";

const Header = () => {
  return (
    <div className="main-header-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="main-header roboto-bold">Games Arena</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
