import React, { useEffect, useState } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

/* Custom Component */
import memories from "./images/memories.png";
import Post from "./components/posts/Posts";
import Form from "./components/forms/Form";
import useStyles from "./styles";
import { getPosts } from "./actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mobileContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            {/* Post */}
            <Grid item xs={12} sm={7}>
              <Post setCurrentId={setCurrentId} />
            </Grid>

            {/* Form */}
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
