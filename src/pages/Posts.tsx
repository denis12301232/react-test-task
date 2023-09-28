import type { IPost } from '@/types';
import { useParams } from 'react-router-dom';
import PostService from '@/api/services/PostService';
import { useEffect, useState } from 'react';
import SimpleLayout from '@/layouts/simple-layout/SimpleLayout';
import Post from '@/components/post/Post';

export default function Posts() {
  const { id } = useParams();
  const [posts, setPosts] = useState<IPost[]>([]);

  function fetchPosts(id: string) {
    PostService.index(id).then((posts) => setPosts(posts));
  }

  useEffect(() => {
    id && fetchPosts(id);
  }, [id]);

  return (
    <SimpleLayout>
      <h2 className="text-center my-md">Posts</h2>
      <ul className="flex flex-col justify-center items-center">
        {posts.map((post, index) => (
          <Post key={post.id} post={post} number={index + 1} />
        ))}
      </ul>
    </SimpleLayout>
  );
}
