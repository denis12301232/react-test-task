import type { IAlbum } from '@/types';
import { useNavigate } from 'react-router-dom';
import styles from './Album.module.scss';
import Button from '~/UI/button/Button';

interface Props {
  album: IAlbum;
  number: number;
  classes?: string;
}

export default function Album({ album, number, classes }: Props) {
  const navigate = useNavigate();

  return (
    <li className={`${styles.album} ${classes}`}>
      <h5 className="text-break">
        <span>{`${number}. `}</span>
        <span className="inline-block first-upper">{album.title}</span>
      </h5>
      <Button onClick={() => navigate(`/albums/${album.id}`)}>Open</Button>
    </li>
  );
}
