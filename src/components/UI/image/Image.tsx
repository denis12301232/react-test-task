import { useState, type ImgHTMLAttributes, useEffect } from 'react';
import Loader from '~/UI/loader/Loader';
import styles from './Image.module.scss';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  classes?: string;
  imgClasses?: string;
}

export default function Image({ alt, classes, imgClasses, ...props }: Props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [props.src]);

  function onLoad() {
    setLoading(false);
  }

  return (
    <div className={`flex justify-center items-center  ${classes}`}>
      <Loader classes={!loading ? styles.hide : ''} />
      <img
        className={`${styles.img} ${imgClasses} ${loading ? styles.hide : ''}`}
        {...props}
        alt={alt}
        onLoad={onLoad}
      />
    </div>
  );
}
