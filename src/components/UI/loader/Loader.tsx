import Icon from '~/UI/icon/Icon';
import styles from './Loader.module.scss';

interface Props {
  width?: number | string;
  height?: number | string;
  classes?: string;
}

export default function Loader({ width = 30, height = 30, classes }: Props) {
  return (
    <Icon
      className={`${styles.loader} ${classes}`}
      width={width}
      height={height}
      name="loader-outline.svg"
    />
  );
}
