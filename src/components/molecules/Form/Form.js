import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { filters } from '@/mocks/filters';
import './Form.scss';
export default function Form({ onAdd }) {
    const [values, setValues] = useState({
        name: '',
        species: '',
        gender: '',
        age: '',
        color: '',
        image_url: '',
        description: '',
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        // Проверка обязательных полей
        if (!values.name.trim())
            return alert('Введите имя питомца');
        for (const filter of filters) {
            if (!values[filter.id]) {
                return alert(`Выберите ${filter.label}`);
            }
        }
        // Минимальная дополнительная валидация
        if (values.name.trim().length < 2)
            return alert('Имя должно быть минимум 2 символа');
        if (values.image_url && !/^https?:\/\//.test(values.image_url))
            return alert('Введите корректный URL изображения');
        if (values.description.length > 200)
            return alert('Описание слишком длинное (макс. 200 символов)');
        const newPet = {
            ...values,
            id: Date.now(),
        };
        onAdd(newPet);
        // Сброс формы
        setValues({
            name: '',
            species: '',
            gender: '',
            age: '',
            color: '',
            image_url: '',
            description: '',
        });
    }
    return (_jsxs("form", { onSubmit: handleSubmit, className: "form flex flex_column gap_10", children: [_jsxs("label", { children: ["\u0418\u043C\u044F:", _jsx("input", { type: "text", name: "name", value: values.name, onChange: handleChange, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u043F\u0438\u0442\u043E\u043C\u0446\u0430" })] }), filters.map((filter) => (_jsxs("label", { children: [filter.label, ":", _jsxs("select", { name: filter.id, value: values[filter.id], onChange: handleChange, children: [_jsxs("option", { value: "", children: ["\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ", filter.label.toLowerCase()] }), filter.options.map((o) => (_jsx("option", { value: o.value, children: o.label }, o.value)))] })] }, filter.id))), _jsxs("label", { children: ["Image URL:", _jsx("input", { type: "text", name: "image_url", value: values.image_url, onChange: handleChange, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435" })] }), _jsxs("label", { children: ["Description:", _jsx("input", { type: "text", name: "description", value: values.description, onChange: handleChange, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0438\u0442\u043E\u043C\u0446\u0430" })] }), _jsx("button", { type: "submit", children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443" })] }));
}
