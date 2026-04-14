import { useState } from "react";
import client from "../api/base44Client";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handlePost = async () => {
    await client.entities.Post.create({
      content: text,
      author_name: "User",
    });

    navigate("/");
  };

  return (
    <div className="p-4">
      <textarea
        placeholder="Share something..."
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3 bg-gray-800 text-white rounded"
      />

      <button
        onClick={handlePost}
        className="mt-2 bg-purple-600 p-2 rounded"
      >
        Post
      </button>
    </div>
  );
}
// force rebuild

