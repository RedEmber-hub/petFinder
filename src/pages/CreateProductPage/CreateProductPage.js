import { jsx as _jsx } from "react/jsx-runtime";
import './CreateProductPage.scss';
import { Form } from '@/components/molecules/Form';
import { pets } from '@/mocks/pets';
import { useNavigate } from 'react-router';
export default function CreateProductPage() {
    const navigate = useNavigate();
    function handleAddPet(newPet) {
        // добавляет новую карточку в начало массива
        pets.unshift(newPet);
        navigate('/products');
    }
    return _jsx(Form, { onAdd: handleAddPet });
}
