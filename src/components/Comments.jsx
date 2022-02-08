import React from "react";

export default function Comments(props) {
  return (
    <>
      <div className="container">
        <div className="comment">
          <h1>{props.comment}</h1>
        </div>
      </div>
    </>
  );
}
