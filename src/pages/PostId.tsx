import type { IComment } from '@/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '@/api/services/PostService';
import SimpleLayout from '@/layouts/SimpleLayout';

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
      <div>{id}</div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </SimpleLayout>
  );
}
