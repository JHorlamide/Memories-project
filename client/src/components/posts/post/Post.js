import React from "react";
import useStyles from "./style";

import moment from "moment";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { ThumbUpAlt, Delete, MoreHoriz } from "@material-ui/icons";

import { deletePost, likePost } from "../../../actions/posts";

import { useDispatch } from "react-redux";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const updatePostHandler = () => {
    return setCurrentId(post._id);
  };

  const deletePostHandler = (e) => {
    e.preventDefault();
    return dispatch(deletePost(post._id));
  };

  const likePostHandler = (e) => {
    e.preventDefault();
    return dispatch(likePost(post._id));
  };

  return (
    <Card className={classes.card}>
      {!post.selectedFile ? (
        <CircularProgress />
      ) : (
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />
      )}
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={updatePostHandler}
        >
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={likePostHandler}>
          <ThumbUpAlt fontSize="small" />
          &nbsp; Likes &nbsp;
          {post.likeCount}
        </Button>

        <Button size="small" color="primary" onClick={deletePostHandler}>
          <Delete fontSize="small" />
          &nbsp; Delete &nbsp;
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
