import PostList from './components/PostList';

function App() {
  return (
    <main>
      <PostList author="Maximilian" body="React.js is awesome!" />
      <PostList author="Manuel" body="React.js is good!" />
    </main>
  );
}

export default App;