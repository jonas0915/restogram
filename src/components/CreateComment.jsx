import React, { useState } from "react";

export default function CreateComment(props) {
  const [comment, setComment] = useState({
    comment: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;

    setComment((prevComment) => {
      return { ...prevComment, [name]: value };
    });
  }

  function submitComment(event) {
    props.onAdd(comment);
    setComment({
      comment: ""
    });
    event.preventDefault();
  }

  return (
    <>
      <div className="container">
        <form>
          <textarea
            name="comment"
            onChange={changeHandler}
            value={comment.comment}
            placeholder="Comments..."
            rows="4"
          />
          <button onClick={submitComment} type="submit">
            Comment
          </button>
        </form>
      </div>
    </>
  );
}
