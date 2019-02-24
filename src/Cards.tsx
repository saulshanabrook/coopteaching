import React, { useEffect, useState } from "react";
import { client, POSTS } from "./client";

import DisplayCard, { DisplayCardProps } from "./DisplayCard";

export default function Cards() {
  const [posts, setPosts] = useState([] as Array<DisplayCardProps>);
  useEffect(() => {
    client
      .query<{ posts: Array<DisplayCardProps> }>({ query: POSTS })
      .then(({ data }) => setPosts(data.posts));
  }, []);
  console.log(posts);
  console.log(
    posts.map(post => {
      console.log(post);
      return <DisplayCard key={post.name} {...post} />;
    })
  );
  return (
    <div>
      {posts.map(post => {
        console.log(post);
        return <DisplayCard key={post.name} {...post} />;
      })}
    </div>
  );
}
