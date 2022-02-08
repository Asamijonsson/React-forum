import React from "react";
import PostList from "../component/PostList";

const Home = (props) => {
  return (
    <div className="Home">
      <h1>React Forum</h1>
      <PostList posts={props.postList} comments={props.comments} />
    </div>
  );
};
export default Home;
