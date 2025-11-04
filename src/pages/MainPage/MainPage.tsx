import { useState, useMemo } from 'react';
import { pets as pets } from '@/mocks/pets';
import { filters } from '@/mocks/filters';
import { PetInterface } from '@/types/Pet';
import { useNavigate, useOutletContext } from 'react-router';
import { Select } from '@/components/atoms/Select';
import { Card } from '@/components/atoms/Card';
import { Pagination } from '@/components/molecules/Pagination';

export default function MainPage() {
  const { search } = useOutletContext<{ search: string }>();
  const navigate = useNavigate();

  const [selectedFilters, setSelectedFilters] = useState<Partial<PetInterface>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [petsState, setPetsState] = useState<PetInterface[]>(pets);
  const [likedPets, setLikedPets] = useState<PetInterface[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  function mapSearchToSpecies(search: string): string[] {
    const speciesMap: Record<string, string> = {
      собака: 'dog',
      кошка: 'cat',
      попугай: 'bird',
      кролик: 'rabbit',
    };
    const searchWords = search.toLowerCase().trim().split(/\s+/);
    return Array.from(
      new Set(
        searchWords.flatMap((word) =>
          Object.entries(speciesMap)
            .filter(([rus]) => rus.startsWith(word))
            .map(([_, eng]) => eng)
        )
      )
    );
  }

  const handleDelete = (id: number) => {
    setPetsState((prev) => prev.filter((pet) => pet.id !== id));
    setLikedPets((prev) => prev.filter((pet) => pet.id !== id));
  };

  const handleLike = (pet: PetInterface) => {
    setLikedPets((prev) => {
      if (prev.find((p) => p.id === pet.id)) return prev;
      return [...prev, pet];
    });
  };

  const resetFilters = () => {
    setSelectedFilters({});
    setShowFavorites(false);
    setCurrentPage(1);
  };

  const filteredPets = useMemo(() => {
    if (showFavorites) return likedPets;

    const searchSpecies = mapSearchToSpecies(search);
    return petsState.filter((pet) => {
      if (selectedFilters.species && pet.species !== selectedFilters.species) return false;
      if (selectedFilters.gender && pet.gender !== selectedFilters.gender) return false;
      if (selectedFilters.age && pet.age !== selectedFilters.age) return false;
      if (selectedFilters.color && pet.color !== selectedFilters.color) return false;
      if (searchSpecies.length > 0 && !searchSpecies.includes(pet.species)) return false;
      return true;
    });
  }, [petsState, selectedFilters, search, likedPets, showFavorites]);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentPets = filteredPets.slice(startIdx, startIdx + itemsPerPage);

  return (
    <main className="main-page__content flex flex_column">
      <div className="main-page__filter flex mb_20 items-center gap_16" style={{ position: 'relative', zIndex: 10 }}>
        {filters.map((filter) => (
          <Select
            key={filter.id}
            placeholder={filter.label}
            options={filter.options}
            value={selectedFilters[filter.id as keyof PetInterface] || null}
            onChange={(value) => setSelectedFilters((prev) => ({ ...prev, [filter.id]: value }))}
          />
        ))}

        <button
          className={`favorites-btn ${showFavorites ? 'active' : ''}`}
          onClick={() => setShowFavorites((prev) => !prev)}
        >
          {showFavorites ? 'Показать все' : 'Избранное'}
        </button>

        <button className="reset-btn" onClick={resetFilters}>
          Сбросить фильтры
        </button>
      </div>

      <div className="main-page__card flex flex_wrap gap_50">
        {currentPets.map((pet) => (
          <div key={pet.id} className="card-wrapper relative" style={{ zIndex: 1 }}>
            <Card
              cardProp={pet}
              onDelete={() => handleDelete(pet.id)}
              onLike={() => handleLike(pet)}
              onClick={() => navigate(`/products/${pet.id}`)} // клик по карточке
            />
          </div>
        ))}
      </div>

      <div className="main-page__pagination">
        <Pagination
          totalItems={filteredPets.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
}
