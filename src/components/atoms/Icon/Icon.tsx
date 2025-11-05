import { ReactSVG } from 'react-svg';
import { IconProps } from './Icon.type';

export default function Icon({ name, strokeColor = 'transparent', fillColor = 'transparent' }: IconProps) {
  return (
    <ReactSVG
      src={`/icons/${name}.svg`}
      beforeInjection={(svg) => {
        svg.setAttribute('stroke', strokeColor);
        svg.setAttribute('fill', fillColor);
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
      }}
    />
  );
}
