import classes from './NewPost.module.css';

function NewPost() {
  function changeBodyHandler(event) {
    console.log(event.target.value) // textarea 에 입력한 값 콘솔로 확인
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
