import { useState, useEffect } from 'react';
import { fetchPokemon, fetchTypes } from '../services/FetchPokemon';
import { fetchFilteredPokemon } from '../services/FetchFilteredPokemon';
import { SearchByType } from '../components/SearchByType';
export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('asc');
  const [loading, setLoading] = useState(true);
  const asc = 'asc';
  const desc = 'desc';

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);

      const typesData = await fetchTypes();
      setTypes(['all', ...typesData]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!selectedType) return;
    const fetchData = async () => {
      const data = await fetchFilteredPokemon(selectedType, search, sort);
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, [selectedType, search, sort]);

  const searchByName = async () => {
    const dataName = await fetchFilteredPokemon(selectedType, search, sort);
    setPokemon(dataName);
  };

  const handleAscChange = () => {
    setSort(asc);
  };

  const handleDescChange = () => {
    setSort(desc);
  };

  if (loading)
    return (
      <p>
        <span className="loader"></span>
      </p>
    );

  return (
    <div>
      <SearchByType
        types={types}
        setSelectedType={setSelectedType}
        selectedType={selectedType}
        callback={searchByName}
      />
    </div>
  );
}
