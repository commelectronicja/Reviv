let posts = JSON.parse(localStorage.getItem("posts")) || [];

const savePosts = () => {
  localStorage.setItem("posts", JSON.stringify(posts));
};

const base44Client = {
  entities: {
    Post: {
      create: async (data) => {
        const newPost = {
          ...data,
          id: Date.now().toString(),
          created_at: new Date().toISOString(),
        };
        posts.unshift(newPost);
        savePosts(); // ✅ persist data
        return newPost;
      },
      list: async () => posts,
    },
  },
};

export default base44Client;
