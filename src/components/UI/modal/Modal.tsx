import {
  type PropsWithChildren,
  type Dispatch,
  type SetStateAction,
} from 'react';
import styles from './Modal.module.scss';

interface Props {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({
  children,
  visible,
  setVisible,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={`${styles.modal} ${visible ? '' : styles.hide}`}
      aria-hidden
      onClick={() => setVisible(false)}
    >
      <div
        className={styles.content}
        aria-hidden
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
