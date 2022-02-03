import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = (props) => {
  console.log(props);
  const { id } = useParams();
  const [data, setData] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return (
    <div>
      <h2>post</h2>
      {props.postList[0].title}
      {/* <br />
      {props.location.post.title} */}
      <br />
      {data.email}
    </div>
  );
};

export default Post;
