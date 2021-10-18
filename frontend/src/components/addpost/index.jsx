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
const AddPost = ({ addPost, isUpdate = false, post }) => {
  let defPost = isUpdate ? post : defaultPost;
  const [postData, setPostData] = React.useState({ ...defPost });
  const _addPost = async () => {
    await addPost(postData);
    setPostData({ ...defaultPost });
  };
  React.useEffect(() => {
    setPostData(defPost);
  }, [isUpdate, post]);
  return (
    <div onClick={(e)=>e.stopPropagation()}>
      <div>{!isUpdate ? "Add" : "Update"} a post</div>

      <div>
        <label>Title :</label>
        <input
          type="text"
          value={postData && postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
      </div>

      <div>
        <label>Description :</label>
        <input
          type="text"
          value={postData && postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
      </div>
      <div>
        <button onClick={_addPost}>{!isUpdate ? "Add" : "Update"} post</button>
      </div>
    </div>
  );
};

export default AddPost;
