const names = ["happy", "Manuel"];

const Post = () => {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>{chosenName}</p>
      <p>내용입니다.</p>
    </div>
  );
};

export default Post;
