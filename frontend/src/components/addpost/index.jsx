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
const AddPost = ({addPost}) => {
  const [postData, setPostData] = React.useState({ ...defaultPost });
  const _addPost=async ()=>{
        await addPost(postData)
        setPostData({...defaultPost})
  }
  return (
    <div>
      <div>Add a post</div>
      
      <div>
      <label>Title :</label>
        <input
          type="text"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
      </div>
      
      <div>
      <label>Description  :</label>
        <input
          type="text"
          value={postData.description}
          onChange={(e) => setPostData({ ...postData, description: e.target.value })}
        />
      </div>
      <div>
          <button onClick={_addPost}>Add post</button>
      </div>
    </div>
  );
};

export default AddPost;
