import { Link } from "react-router-dom";

const PostInfo = (props) => {
  return (
    <div>
      <Link to={{ pathname: `/post/${props.id}`, post: { ...props } }}>
        <li>{props.title}</li>
      </Link>
    </div>
  );
};

export default PostInfo;
