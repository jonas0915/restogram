import React from "react";
import UploadButton from "./UploadButton";

function Navigation() {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <div>res2gram</div>
          <div>
            <UploadButton />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
