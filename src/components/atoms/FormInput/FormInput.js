import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './FormInput.scss';
export default function FormInput({ label, errorMessage, onChange, id, type, name, value, placeholder, required, }) {
    return (_jsxs("div", { className: "formInput flex flex_column", children: [_jsx("div", { className: "formInput__label", children: _jsx("label", { className: "body-xs body-xs--medium black", children: label }) }), _jsx("div", { className: "formInput__input body-xs black", children: _jsx("input", { id: String(id), type: type, name: name, value: value, placeholder: placeholder, required: required, onChange: onChange }) }), _jsx("div", { className: "formInput__error", children: _jsx("span", { className: "body-2xs", children: errorMessage }) })] }));
}
