export const filters = [
    {
        id: 'species', // вид
        label: 'Вид',
        options: [
            { value: 'dog', label: 'Собака' },
            { value: 'cat', label: 'Кошка' },
            { value: 'bird', label: 'Птица' },
            { value: 'rabbit', label: 'Кролик' },
        ],
    },
    {
        id: 'gender', // пол
        label: 'Пол',
        options: [
            { value: 'male', label: 'Мужской' },
            { value: 'female', label: 'Женский' },
        ],
    },
    {
        id: 'color', // цвет
        label: 'Цвет',
        options: [
            { value: 'black', label: 'Чёрный' },
            { value: 'white', label: 'Белый' },
            { value: 'brown', label: 'Коричневый' },
            { value: 'gray', label: 'Серый' },
            { value: 'ginger', label: 'Рыжий' },
        ],
    },
    {
        id: 'age', // возраст
        label: 'Возраст',
        options: [
            { value: 'baby', label: 'Малютка' },
            { value: 'young', label: 'Молодой' },
            { value: 'adult', label: 'Взрослый' },
            { value: 'senior', label: 'Пожилой' },
        ],
    },
];
