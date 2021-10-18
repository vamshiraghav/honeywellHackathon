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
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [selectedPost, setSelectedPost] = React.useState("");
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
    if (isUpdate) {
      await axios
        .put(url + "/" + selectedPost, payload)
        .then(async () => await loadPosts())
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
      setIsUpdate(false);
      return true;
    }
    await axios
      .post(url, payload)
      .then(async () => await loadPosts())
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
    return true;
  };
  const deletePost = async (id) => {
    if (id == "") {
      return;
    }
    setIsLoading(true);

    await axios
      .delete(url + "/" + id)
      .then(async () => await loadPosts())
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
    await setIsUpdate(false);
    await setSelectedPost("");
    return true;
  };
  const selectPost = (id) => {
    setSelectedPost(id);
    setIsUpdate(true);
  };
  React.useEffect(() => {
    loadPosts();
  }, []);
  return (
    <Grid
      className="App title"
      onClick={() => {
        setIsUpdate(false);
        setSelectedPost("");
      }}
    >
      {isloading && <Loading />}
      HoneyWell Hackathon
      <AddPost
        addPost={addPost}
        isUpdate={isUpdate}
        post={posts.filter(({ id }) => id == selectedPost)[0]}
      />
      <div className="title">My posts</div>
      <Grid container>
        {posts?.map((post) => (
          <Grid item xs={3}>
            <Post {...post} selectPost={selectPost} deletePost={deletePost} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default App;
