import { useNavigate, useParams } from 'react-router-dom';
import PostService from '@/api/services/PostService';
import { useEffect } from 'react';
import SimpleLayout from '@/layouts/simple-layout/SimpleLayout';
import Post from '~/post/Post';
import Loader from '~/UI/loader/Loader';
import { useQuery } from '@/hooks';

export default function Posts() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { query, data: posts, loading, error } = useQuery(PostService.index);

  useEffect(() => {
    id && query(id);
  }, [id, query]);

  useEffect(() => {
    Array.isArray(posts) && !posts.length && navigate('/');
  }, [posts, navigate]);

  return (
    <SimpleLayout>
      <h2 className="text-center my-md">Posts</h2>
      <ul className="flex flex-col justify-center items-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="mt-md">{error.message}</div>
        ) : (
          posts?.map((post, index) => (
            <Post
              classes="mb-md"
              key={post.id}
              post={post}
              number={index + 1}
            />
          ))
        )}
      </ul>
    </SimpleLayout>
  );
}
