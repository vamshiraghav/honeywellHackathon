import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import AddPost from "./components/addpost";

function App() {
  const [posts,setPosts]= React.useState([])
  const [author,setAuthor]=React.useState('')
  const [isAdmin,setIsAdmin]= React.useState(false)
  return (    <div className="App">
    HoneyWell Hackathon
    <AddPost />
    </div>
  );
}

export default App;
