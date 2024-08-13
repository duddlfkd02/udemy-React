import Post from "./components/Post";

const App = () => {
  return (
    <main>
      <Post author="작가명1" body="내용입니다1" />
      <Post author="작가명2" body="내용입니다2" />
      <Post author="작가명3" body="내용입니다3" />
    </main>
  );
};

export default App;
