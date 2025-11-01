import { ReactSVG } from 'react-svg';
import { IconProps } from './Icon.type';

export default function Icon({ name }: IconProps) {
  return <ReactSVG src={`/icons/${name}.svg`} />;
}
