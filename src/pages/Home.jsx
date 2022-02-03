import React from "react";
import PostInfo from "../component/PostInfo";
const Home = (props) => {
  return (
    <div>
      <h1>React Forum</h1>
      {props.postList.map((post, i) => {
        return (
          <ul>
            <PostInfo {...post} key={i} />
          </ul>
        );
      })}
    </div>
  );
};

export default Home;
