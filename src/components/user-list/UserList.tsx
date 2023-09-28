import { IUser } from '@/types';
import styles from './UserList.module.scss';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '~/UI/button/Button';
import Icon from '~/UI/icon/Icon';

interface Props {
  users: IUser[];
  classes?: string;
  sortFn: () => void;
  sort: boolean;
}

export default function UserList({ users, classes, sortFn, sort }: Props) {
  const navigate = useNavigate();

  return (
    <div className={`${styles.list} ${classes}`}>
      <div className={styles.title}>
        <button className={`${styles.sort}`} onClick={sortFn}>
          <Icon
            className={sort ? styles['sort-desc'] : styles['sort-asc']}
            name="arrow-down-outline.svg"
          />
        </button>
        <span className="px-sm">Username</span>
      </div>
      <div className={styles.title}>Name</div>
      <div className={styles.title}>Email</div>
      <div className={styles.title}>Posts</div>
      <div className={styles.title}>Albums</div>
      {users.map((user) => (
        <Fragment key={user.id}>
          <div className="flex items-center text-body2">{user.username}</div>
          <div className="flex items-center text-body2">{user.name}</div>
          <div className="flex items-center text-body2">{user.email}</div>
          <div className="flex items-center text-body2">
            <Button onClick={() => navigate(`/users/${user.id}/posts`)}>
              Open
            </Button>
          </div>
          <div className="flex items-center">
            <Button onClick={() => navigate(`/users/${user.id}/albums`)}>
              Show
            </Button>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
