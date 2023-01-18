import { useLoaderData } from "react-router-dom";

type Post = {
  id: string;
  title: string;
};

const PostsScreen = () => {
  const posts = useLoaderData() as Post[];

  return (
    <section>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post: any) => (
          <li key={post?.id}>{post?.title}</li>
        ))}
      </ul>
    </section>
  );
};

export const postsLoader = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");

  return await data.json();
};

export default PostsScreen;
