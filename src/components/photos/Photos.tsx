import type { IPhoto } from '@/types';
import styles from './Photos.module.scss';
import Modal from '~/UI/modal/Modal';
import { useState } from 'react';
import Image from '~/UI/image/Image';

interface Props {
  photos: IPhoto[];
}

export default function Photos({ photos }: Props) {
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState('');

  function openImage(url: string) {
    setUrl(url);
    setVisible(true);
  }

  return (
    <>
      <Modal visible={visible} setVisible={setVisible}>
        <Image classes={styles.image} src={url} alt="" />
      </Modal>
      <div className={styles.photos}>
        {photos.map((photo) => (
          <Image
            classes={styles.photo}
            key={photo.id}
            src={photo.thumbnailUrl}
            alt={photo.title}
            onClick={() => openImage(photo.url)}
            aria-hidden
          />
        ))}
      </div>
    </>
  );
}
