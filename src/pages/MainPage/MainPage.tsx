import { useState, useMemo, useEffect } from 'react';
import { pets as initialPets, pets } from '@/mocks/pets';
import { filters } from '@/mocks/filters';
import { PetInterface } from '@/types/Pet';
import { NavLink, useOutletContext } from 'react-router';
import { Select } from '@/components/atoms/Select';
import { Card } from '@/components/atoms/Card';
import { Pagination } from '@/components/molecules/Pagination';

export default function MainPage() {
  const { search } = useOutletContext<{ search: string }>();
  const [selectedFilters, setSelectedFilters] = useState<Partial<PetInterface>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [petsState, setPetsState] = useState<PetInterface[]>(pets); // исходный массив

  // функция для поиска по виду
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

  const filteredPets = useMemo(() => {
    const searchSpecies = mapSearchToSpecies(search);

    return petsState.filter((pet) => {
      if (selectedFilters.species && pet.species !== selectedFilters.species) return false;
      if (selectedFilters.gender && pet.gender !== selectedFilters.gender) return false;
      if (selectedFilters.age && pet.age !== selectedFilters.age) return false;
      if (selectedFilters.color && pet.color !== selectedFilters.color) return false;
      if (searchSpecies.length > 0 && !searchSpecies.includes(pet.species)) return false;
      return true;
    });
  }, [petsState, selectedFilters, search]);

  // текущая страница
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentPets = filteredPets.slice(startIdx, startIdx + itemsPerPage);

  return (
    <main className="main-page__content flex flex_column">
      <div className="main-page__filter flex mb_20">
        {filters.map((filter) => (
          <Select
            key={filter.id}
            placeholder={filter.label}
            options={filter.options}
            value={selectedFilters[filter.id as keyof PetInterface] || null}
            onChange={(value) => setSelectedFilters((prev) => ({ ...prev, [filter.id]: value }))}
          />
        ))}
      </div>

      <div className="main-page__card flex flex_wrap gap_50">
        {currentPets.map((pet) => (
          <NavLink key={pet.id} to={`/products/${pet.id}`} className="navlink-reset">
            <Card cardProp={pet} />
          </NavLink>
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
