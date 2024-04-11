import React from "react";
import { Post } from "./Posts";
import useFetch from "../useFetch";
// import useApiGet from "../useFetch";

export const PostsContainer = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/') 
    return (
        <div>
            <Post data={data} loading={loading} error={error} />
        </div>
    )
}