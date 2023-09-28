import type { IComment } from '@/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '@/api/services/PostService';
import SimpleLayout from '@/layouts/simple-layout/SimpleLayout';

export default function PostId() {
  const { id } = useParams();
  const [comments, setComments] = useState<IComment[]>([]);

  function fetchComments(id: string) {
    PostService.getComments(id).then((comments) => setComments(comments));
  }

  useEffect(() => {
    id && fetchComments(id);
  }, [id]);

  return (
    <SimpleLayout>
      <h2 className="text-center my-md">Post</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <div>{comment.name}</div>
            <div>{comment.email}</div>
            <div>{comment.body}</div>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  );
}
