import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
function App() {
  const history = useHistory();
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setPostList(json));
  }, []);
  return (
    <div className="App">
      <button onClick={history.goBack}>Go back</button>
      <Switch>
        <Route
          path="/post/:id"
          render={(props) => <Post {...props} postList={postList} />}
        />
        <Route
          path="/"
          render={(props) => <Home {...props} postList={postList} />}
        />
      </Switch>
    </div>
  );
}

export default App;
