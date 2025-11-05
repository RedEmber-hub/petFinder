import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import './Button.scss';
export default function Button({ size, children, onClick }) {
    const className = classNames({
        button: true,
        [`button--${size}`]: size,
    });
    return (_jsx("button", { className: className, onClick: onClick, children: children }));
}
