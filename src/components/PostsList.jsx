import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    //추가 모달 띄우는법 
    // let modalContent;

    // if (modalContent) {
    //     modalContent = (
    //         <Modal onClose={hideModalHandler}>
    //             <NewPost
    //                 onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}
    //             />
    //         </Modal>
    //     );
    // }



    return (
        <>
            {/* modalContent */}
            {/* 모달띄우는 방법 3 */}
            {/* {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                <NewPost
                    onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}
                />
            </Modal>
            )} */}
            {modalIsVisible ? (
                <Modal onClose={hideModalHandler}>
                    <NewPost
                        onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}
                    />
                </Modal>
            ) : false}

            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author={enteredAuthor} body={enteredBody} />
            </ul>
        </>
    );
}

export default PostsList;