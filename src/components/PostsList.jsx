import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

const PostsList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enterBody, setEnterBody] = useState("");
  const [enterAuthor, setEnterAuthor] = useState("");

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  const bodyChangeHandler = (e) => {
    setEnterBody(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setEnterAuthor(e.target.value);
  };

  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : (
        false
      )}

      <ul className={classes.posts}>
        <Post author={enterAuthor} body={enterBody} />
        <Post author="작가명2" body="내용입니다2" />
        <Post author="작가명3" body="내용입니다3" />
      </ul>
    </>
  );
};

export default PostsList;
