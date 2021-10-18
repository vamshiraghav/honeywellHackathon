import logo from "./logo.svg";
import "./App.css";
import React from "react";
import AddPost from "./components/addpost";
import axios from "axios";
import Post from "./components/post";
import { Grid } from "@mui/material";
import Loading from "./components/loading";
function App() {
  const [posts, setPosts] = React.useState([]);
  const [author, setAuthor] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [isloading, setIsLoading] = React.useState(false);
  const url = "https://mymock.herokuapp.com/posts";
  const loadPosts = async () => {
    setIsLoading(true);
    await axios
      .get(url)
      .then(({ data }) => setPosts(data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  };
  const addPost = async (payload) => {
    setIsLoading(true);
    await axios
      .post(url, payload)
      .then(async () => await loadPosts())
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
    return true;
  };
  React.useEffect(() => {
    loadPosts();
  }, []);
  return (
    <Grid className="App title">
      {isloading && <Loading />}
      HoneyWell Hackathon
      <AddPost addPost={addPost} />
      <div className="title">My posts</div>
      <Grid container>
        {posts?.map((post) => (
          <Grid item xs={3}>
            <Post {...post} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default App;
