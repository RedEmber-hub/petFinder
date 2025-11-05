import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { pets as pets } from '@/mocks/pets';
import { filters } from '@/mocks/filters';
import { useNavigate, useOutletContext } from 'react-router';
import { Select } from '@/components/atoms/Select';
import { Card } from '@/components/atoms/Card';
import { Pagination } from '@/components/molecules/Pagination';
import { Button } from '@/components/atoms/Button';
import './MainPage.scss';
export default function MainPage() {
    const { search } = useOutletContext();
    const navigate = useNavigate();
    const [selectedFilters, setSelectedFilters] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [petsState, setPetsState] = useState(pets);
    const [likedPets, setLikedPets] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const speciesMap = {
        собака: 'dog',
        кошка: 'cat',
        попугай: 'bird',
        кролик: 'rabbit',
    };
    function mapSearchToSpecies(search) {
        const searchWords = search.toLowerCase().trim().split(/\s+/);
        return Array.from(new Set(searchWords.flatMap((word) => Object.entries(speciesMap)
            .filter(([rus]) => rus.startsWith(word))
            .map(([_, eng]) => eng))));
    }
    const handleDelete = (id) => {
        setPetsState((prev) => prev.filter((pet) => pet.id !== id));
        setLikedPets((prev) => prev.filter((pet) => pet.id !== id));
    };
    const handleLike = (pet) => {
        setLikedPets((prev) => {
            const exists = prev.find((p) => p.id === pet.id);
            return exists ? prev.filter((p) => p.id !== pet.id) : [...prev, { ...pet, liked: true }];
        });
    };
    const resetFilters = () => {
        setSelectedFilters({});
        setShowFavorites(false);
        setCurrentPage(1);
    };
    const filteredPets = useMemo(() => {
        if (showFavorites)
            return likedPets;
        const searchSpecies = mapSearchToSpecies(search);
        return petsState.filter((pet) => {
            if (selectedFilters.species && pet.species !== selectedFilters.species)
                return false;
            if (selectedFilters.gender && pet.gender !== selectedFilters.gender)
                return false;
            if (selectedFilters.age && pet.age !== selectedFilters.age)
                return false;
            if (selectedFilters.color && pet.color !== selectedFilters.color)
                return false;
            if (searchSpecies.length > 0 && !searchSpecies.includes(pet.species))
                return false;
            return true;
        });
    }, [petsState, selectedFilters, search, likedPets, showFavorites]);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const currentPets = filteredPets.slice(startIdx, startIdx + itemsPerPage);
    return (_jsxs("main", { className: "main-page__content flex flex_column", children: [_jsxs("div", { className: "main-page__filter mb_20 gap_16", style: { position: 'relative', zIndex: 10 }, children: [filters.map((filter) => (_jsx(Select, { placeholder: filter.label, options: filter.options, value: selectedFilters[filter.id] || null, onChange: (value) => setSelectedFilters((prev) => ({ ...prev, [filter.id]: value })) }, filter.id))), _jsxs("div", { className: "main-page__buttons flex gap_25", children: [_jsx(Button, { onClick: () => setShowFavorites((prev) => !prev), children: showFavorites ? 'Показать все' : 'Избранное' }), _jsx(Button, { onClick: resetFilters, children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B" })] })] }), _jsx("div", { className: "main-page__card flex flex_wrap gap_50", children: currentPets.map((pet) => (_jsx("div", { className: "card-wrapper relative", style: { zIndex: 1 }, children: _jsx(Card, { cardProp: pet, onDelete: () => handleDelete(pet.id), onLike: () => handleLike(pet), onClick: () => navigate(`/products/${pet.id}`), isLiked: likedPets.some((p) => p.id === pet.id) }) }, pet.id))) }), _jsx("div", { className: "main-page__pagination", children: _jsx(Pagination, { totalItems: filteredPets.length, itemsPerPage: itemsPerPage, currentPage: currentPage, onPageChange: setCurrentPage }) })] }));
}
