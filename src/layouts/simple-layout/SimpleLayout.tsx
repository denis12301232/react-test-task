import type { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '~/UI/icon/Icon';
import styles from './SimpleLayout.module.scss';

export default function SimpleLayout({ children }: PropsWithChildren) {
  const navigate = useNavigate();

  return (
    <>
      <header className={styles.header}>
        <button className={styles.back} onClick={() => navigate('/')}>
          <Icon name="arrow-back-outline.svg" />
        </button>
      </header>
      <main>{children}</main>
    </>
  );
}
