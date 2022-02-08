import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../component/Post";

const Details = (props) => {
  const [data, setData] = useState({});
  const [commentList, setCommentList] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (!props.location.post) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => response.json())
      .then((json) => setCommentList(json));
  }, []);

  return (
    <div>
      <Post details={props.location.post || data} commentList={commentList} />
    </div>
  );
};

export default Details;
