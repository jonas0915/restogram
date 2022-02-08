import React from "react";
import UploadButton from "./UploadButton";
import SearchBar from "./SearchBar";
import RestoLogo from "../imgs/retogram-logo.png";

function Navigation() {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <img src={RestoLogo} alt="resto-logo" className="resto-logo" />
          <div>
            <SearchBar />
          </div>
          <div>
            <UploadButton />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
