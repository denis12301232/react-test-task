import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: Props) {
  return (
    <button className={`${styles.button} ${styles.blue}`} {...props}></button>
  );
}
