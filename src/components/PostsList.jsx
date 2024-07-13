// import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {

    return (
        <>
            {isPosting ? (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                    />
                </Modal>
            ) : false}

            <ul className={classes.posts}>
                <Post author="Max" body="React.js is awesome!" />
            </ul>
        </>
    );
}

export default PostsList;