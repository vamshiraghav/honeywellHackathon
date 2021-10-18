import React from "react";

const defaultPost = {
  id: "",
  title: "",
  description: "",
  author: "",
  createdDate: new Date(),
  isApproved: false,
  denyComments: "",
  comments: "",
};
const AddPost = () => {
  const [postData, setPostData] = React.useState({ ...defaultPost });
  const addPost=()=>{
    
  }
  return (
    <div>
      <div>Add a post</div>
      <div>Title</div>
      <div>
        <input
          type="text"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
      </div>
      <div>Description</div>
      <div>
        <input
          type="text"
          value={postData.description}
          onChange={(e) => setPostData({ ...postData, description: e.target.value })}
        />
      </div>
      <div>
          <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
};

export default AddPost;
