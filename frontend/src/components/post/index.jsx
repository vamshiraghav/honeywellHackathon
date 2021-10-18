import React from 'react'
import './post.css'
import Paper from '@mui/material/Paper';
const Post = ({id='',title='',description='',author='',createdDate=(new Date()),comments='',denyComments=''}) => {
    return (
        <Paper className='post' xs={12}>
            <div className='title'>
                {title}
            </div>
            <div className='desc'>
                {description}
            </div>
            <div className='date'>
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className='comments'>
                {comments}
            </div>
        </Paper>
    )
}

export default Post