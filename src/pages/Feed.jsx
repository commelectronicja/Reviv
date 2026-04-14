import { useEffect, useState } from "react";
import client from "../api/base44Client";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await client.entities.Post.list();
    setPosts(data);
  };

return (
  <div className="p-4">
    {posts.length === 0 ? (
      <p>No posts yet. Create one!</p>
    ) : (
      posts.map((p) => (
        <div key={p.id} className="bg-gray-800 p-3 rounded mb-2">
          <p>{p.author_name}</p>
          <p>{p.content}</p>
        </div>
      ))
    )}
  </div>
);
