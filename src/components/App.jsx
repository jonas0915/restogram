import React, { useState } from "react";
import Navigation from "./Navigation";
import CreateComment from "./CreateComment";
import PreviewUpload from "./Preview";
import Comments from "./Comments";
import { ToastContainer } from "react-toastify";

function App() {
  const [comments, setComments] = useState([]);

  function addComment(newComment) {
    setComments((prevComments) => {
      return [...prevComments, newComment];
    });
  }
  return (
    <>
      <React.StrictMode>
        <Navigation />
        <CreateComment onAdd={addComment} />
        <ToastContainer />
        {comments.map((commentItem, index) => {
          return (
            <Comments key={index} id={index} comment={commentItem.comment} />
          );
        })}
        <PreviewUpload />
      </React.StrictMode>
    </>
  );
}

export default App;
