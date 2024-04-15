import TablePost from "./Table";

PostMananger.propTypes = {};

function PostMananger() {
  return (
    <div>
      <h1
        style={{
          color: "blue",
          fontSize: "25px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Posts management
      </h1>
      <TablePost></TablePost>
    </div>
  );
}

export default PostMananger;
