import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: string;
}

export default function Button({ classes, ...props }: Props) {
  return (
    <button
      className={`${styles.button} ${classes} ${styles.blue}`}
      {...props}
    ></button>
  );
}
