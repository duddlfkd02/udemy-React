import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Maximilian" body="React.js is awesome!" />
                <Post author="Manuel" body="React.js is good!" />
            </ul>
        </>
    );
}

export default PostsList;