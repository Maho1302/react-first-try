import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App(name) {
  return (
    <div className="App">
      <Users/>
        <hr/>
        <Posts/>
      <hr/>
      <Comments/>
    </div>
  );
}

export default App;
