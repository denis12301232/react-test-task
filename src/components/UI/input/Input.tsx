import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  classes?: string;
}

export default function Input({ label, error, classes, ...props }: Props) {
  return (
    <div className={`${styles.wrapper} ${classes}`}>
      <div className="relative">
        <input className={styles.input} required {...props} />
        <label className={styles.label}>{label}</label>
      </div>
      <div>{error}</div>
    </div>
  );
}
