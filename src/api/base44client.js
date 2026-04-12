let posts = [];

export const base44 = {
  entities: {
    Post: {
      create: async (data) => {
        const newPost = {
          ...data,
          id: Date.now().toString(),
        };
        posts.unshift(newPost);
        return newPost;
      },
      list: async () => posts,
    },
  },
};
