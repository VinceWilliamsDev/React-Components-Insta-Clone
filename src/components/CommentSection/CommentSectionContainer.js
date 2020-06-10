// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  console.log(props)
  // Add state for the comments
  const [comments, addComment] = useState(props.comments)

  const submitComment = () => addComment(comments.push)
  const changeComment = () => {
    addComment(comments.pop)
    addComment(comments.push)
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map(comment => {
        // console.log(comment)
        return <Comment comment={comment} />
      })}
      <CommentInput /*submitComment={submitComment} changeComment={changeComment}*/ />
    </div>
  );
};

export default CommentSection;
