import type { ImgHTMLAttributes } from 'react';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  width?: string | number;
  height?: string | number;
}

export default function Icon({
  name,
  width = 20,
  height = 20,
  ...props
}: Props) {
  return (
    <img
      src={require(`@/assets/icons/${name}`)}
      alt={name}
      style={{ width: width + 'px', height: height + 'px' }}
      {...props}
    />
  );
}
