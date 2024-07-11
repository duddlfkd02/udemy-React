import classes from './Post.module.css';

function PostList(props) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
    );
}

export default PostList;