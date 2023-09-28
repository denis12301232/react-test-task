import type { IPost } from '@/types';
import { useNavigate, useParams } from 'react-router-dom';
import PostService from '@/api/services/PostService';
import { useEffect, useState } from 'react';
import SimpleLayout from '@/layouts/SimpleLayout';

export default function Posts() {
  const navigate = useNavigate();
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
      <div>{id}</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h5>{post.title}</h5>
            <div>{post.body}</div>
            <button onClick={() => navigate(`/posts/${post.id}`)}>Open</button>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  );
}
