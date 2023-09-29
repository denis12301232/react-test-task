import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostService from '@/api/services/PostService';
import SimpleLayout from '@/layouts/simple-layout/SimpleLayout';
import Loader from '~/UI/loader/Loader';
import Comments from '~/comment/Comments';
import { useQuery } from '@/hooks';

export default function PostId() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    query,
    data: comments,
    loading,
    error,
  } = useQuery(PostService.getComments);
  const {
    query: fetchPost,
    data,
    loading: isPostLoading,
    error: postError,
  } = useQuery(PostService.show);
  const post = useMemo(() => (data ? data[0] : null), [data]);

  useEffect(() => {
    id && Promise.allSettled([query(id), fetchPost(id)]);
  }, [id, query, fetchPost]);

  useEffect(() => {
    Array.isArray(data) && !data.length && navigate('/');
  }, [data, navigate]);

  return (
    <SimpleLayout>
      <h2 className="text-center my-md">Post</h2>
      <div className="flex flex-col items-center" style={{ padding: '20px' }}>
        {isPostLoading ? (
          <Loader />
        ) : postError ? (
          <div className="mt-md">{postError.message}</div>
        ) : (
          <div>
            <h3 className="first-upper">{post?.title}</h3>
            <div className="first-upper">{post?.body}</div>
          </div>
        )}
      </div>

      <ul className="mt-md flex flex-col items-center">
        <h4 className="my-md">Comments:</h4>
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="mt-md">{error.message}</div>
        ) : (
          comments?.map((comment) => (
            <Comments classes="mb-md" key={comment.id} comment={comment} />
          ))
        )}
      </ul>
    </SimpleLayout>
  );
}
