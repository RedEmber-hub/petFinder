import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import './InputField.scss';
function Root({ children }) {
    const className = classNames({
        input: true,
    });
    return _jsx("div", { className: className, children: children });
}
function Field({ onChangeValue, ...props }) {
    return (_jsx("div", { className: "input__input-element flex", children: _jsx("input", { type: "text", value: props.value, ...props, onInput: (event) => onChangeValue?.(event.target.value) }) }));
}
function Slot({ children }) {
    return _jsx(_Fragment, { children: children });
}
export const InputField = Object.assign(Root, {
    Field,
    Slot,
});
