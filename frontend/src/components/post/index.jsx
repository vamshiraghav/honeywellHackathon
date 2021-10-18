import React from "react";
import "./post.css";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
const Post = ({
  id = "",
  title = "",
  description = "",
  author = "",
  createdDate = new Date(),
  comments = "",
  denyComments = "",
  selectPost,
  deletePost
}) => {
  const onClickCard = (e) => {
    e.stopPropagation();
    selectPost(id);
  };
  const _deletePost = () => {
    deletePost(id);
  };
  return (
    <Paper className="post" xs={12} onClick={onClickCard}>
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
      <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
      <div className="comments">{comments}</div>
      <Button onClick={_deletePost}>Delete Post</Button>
    </Paper>
  );
};

export default Post;
