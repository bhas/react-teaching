
export default function Home() {
  return (
    <div className="comments-container">
      <Comment username="Bjørn Vinther" commentText="I think Javascript is EVIL!" />
      <Comment username="Jerry" commentText="Try use React instead. It is much simpler once you get the hang of it." />
    </div>
  )
}

function Comment({username, commentText}) {
  const currentDate = new Date().toLocaleString(); // Get current date and time

  const deleteComment = () => {
    // Delete the comment here...
  }

  return (
    <div className="comment">
      <h4>{username}</h4>
      <div className="comment-date">Posted on: {currentDate}</div>
      <p>{commentText}</p>
      <button onClick={() => deleteComment()} className="delete-btn">Delete</button>
    </div>
  );
}


