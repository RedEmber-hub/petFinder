import { jsx as _jsx } from "react/jsx-runtime";
import { ReactSVG } from 'react-svg';
export default function Icon({ name, strokeColor = 'transparent', fillColor = 'transparent' }) {
    return (_jsx(ReactSVG, { src: `/icons/${name}.svg`, beforeInjection: (svg) => {
            svg.setAttribute('stroke', strokeColor);
            svg.setAttribute('fill', fillColor);
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
        } }));
}
