import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost() {
  const [enteredBody, setEnteredBody] = useState('');

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
    //enteredBody = event.target.value; 처럼 직접 할당하는 대신
    // 위 코드처럼 업데이트 함수를 호출해서 새 상태 값 인자를 넘겨주면 된다.
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
