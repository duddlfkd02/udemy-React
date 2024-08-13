import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  return (
    <ul className={classes.posts}>
      <Post author="작가명1" body="내용입니다1" />
      <Post author="작가명2" body="내용입니다2" />
      <Post author="작가명3" body="내용입니다3" />
    </ul>
  );
};

export default PostsList;
