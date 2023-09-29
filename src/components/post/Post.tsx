import type { IPost } from '@/types';
import styles from './Post.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '~/UI/button/Button';

interface Props {
  post: IPost;
  number: number;
  classes?: string;
}

export default function Post({ post, number, classes }: Props) {
  const navigate = useNavigate();

  return (
    <li className={`${styles.post} ${classes}`}>
      <h4>
        {`${number}. `}
        <span className="first-upper inline-block">{post.title}</span>
      </h4>

      <div className="first-upper">
        <div>{post.body}</div>
        <div className="mt-md">
          <Button
            onClick={() => navigate(`/posts/${post.id}`, { state: post })}
          >
            Show comments
          </Button>
        </div>
      </div>
    </li>
  );
}
