import React from 'react'
import './post.scss'
const Post = ({id='',title='',description='',author='',createdDate=new Date(),comments='',denyComments=''}) => {
    return (
        <div className='post'>
            <div className='title'>
                {title}
            </div>
            <div className='desc'>
                {description}
            </div>
            <div className='date'>
                {createdDate.toLocaleDateString()}
            </div>
            <div className='comments'>
                {comments}
            </div>
        </div>
    )
}

export default Post
{title,description,author,createdDate,comments,denyComments}