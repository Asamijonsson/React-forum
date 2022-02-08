const Post = (props) => {
  console.log(props.details);
  console.log(props.commentList);
  if (props.details && props.commentList) {
    return (
      <div>
        <div className="Post">
          <h2>Title</h2>
          <h3>{props.details.title}</h3>
          <p>{props.details.body}</p>
        </div>

        <div className="Comment">
          <h2>Comment</h2>
          <h3>{props.commentList.body}</h3>
          <h3>Name</h3>
          <p>{props.commentList.name}</p>
          <h3>E-mail</h3>
          <p>{props.commentList.email}</p>
        </div>
      </div>
    );
  }
};
export default Post;
