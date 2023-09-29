import type { IComment } from '@/types';
import style from './Comment.module.scss';

interface Props {
  comment: IComment;
  classes?: string;
}

export default function Comments({ comment, classes }: Props) {
  return (
    <li className={`${style.comment} ${classes}`} key={comment.id}>
      <div className="flex items-center">
        <h5>Name:&nbsp;</h5>
        <div className="first-upper">{comment.name}</div>
      </div>
      <div className="flex items-center">
        <h5>Email:&nbsp;</h5>
        <div>{comment.email}</div>
      </div>
      <div className="first-upper">{comment.body}</div>
    </li>
  );
}
