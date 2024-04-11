import React from "react";

export const Post = ({ data, error }) => {
  console.log(data);
  return (
    <div>
      <h2>Posts</h2>
      {data ? (
        <div>
          {data.map(post => (
            <div key={post.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
              <section>
                <h3>USER_ID</h3>
                <p>{post.userId}</p>
              </section>
              <section>
                <h3>Title</h3>
                <p>{post.title}</p>
              </section>
              <section>
                <h3>Body</h3>
                <p>{post.body}</p>
              </section>
            </div>
          ))}
        </div>
      ) : (
        <p>No data {error}</p>
      )}
    </div>
  );
}
