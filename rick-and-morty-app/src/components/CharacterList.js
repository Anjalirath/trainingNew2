import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../api/rickAndMortyApi';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [speciesFilter, setSpeciesFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [originFilter, setOriginFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
  
    useEffect(() => {
      const getCharacters = async () => {
        const data = await fetchCharacters();
        setCharacters(data.results);
      };
      getCharacters();
    }, []);
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSpeciesChange = (event) => {
      setSpeciesFilter(event.target.value);
    };
  
    const handleGenderChange = (event) => {
      setGenderFilter(event.target.value);
    };
  
    const handleOriginChange = (event) => {
      setOriginFilter(event.target.value);
    };
  
    const handleSortOrderChange = (event) => {
      setSortOrder(event.target.value);
    };
  
    const filteredCharacters = characters.filter(character => {
      return (
        character.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (speciesFilter === '' || character.species === speciesFilter) &&
        (genderFilter === '' || character.gender === genderFilter) &&
        (originFilter === '' || character.origin.name === originFilter)
      );
    }).sort((a, b) => {
      return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
    });
  
    return (
      <div className="character-list-container">
        <div className="filters">
          <div className="filter-section">
            <h4>Species</h4>
            <select onChange={handleSpeciesChange} value={speciesFilter}>
              <option value="">All Species</option>
              <option value="Human">Human</option>
              <option value="Mytholog">Mytholog</option>
              <option value="Other Species">Other Species...</option>
            </select>
          </div>
          <div className="filter-section">
            <h4>Gender</h4>
            <select onChange={handleGenderChange} value={genderFilter}>
              <option value="">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
             
            </select>
          </div>
          <div className="filter-section">
          <h4>Origin</h4>
          <select onChange={handleOriginChange} value={originFilter}>
            <option value="">All Origins</option>
            <option value="unknown">Unknown</option>
            <option value="Post-Apocalyptic Earth">Post-Apocalyptic Earth</option>
            <option value="Nuptia 4">Nuptia 4</option>
            <option value="Other Origins">Other Origins</option>
          </select>
          </div>
        </div>

          <div className="main-content">
        <div className="left-content">
          <div className="selected-filters">
            <h4>Selected Filters</h4>
            {speciesFilter && <span className="filter-tag">{speciesFilter} <button onClick={() => setSpeciesFilter('')}>x</button></span>}
            {genderFilter && <span className="filter-tag">{genderFilter} <button onClick={() => setGenderFilter('')}>x</button></span>}
            {originFilter && <span className="filter-tag">{originFilter} <button onClick={() => setOriginFilter('')}>x</button></span>}
          </div>
          <div className="search-section">
            <input 
              type="text" 
              placeholder="Search by Name" 
              value={searchTerm} 
              onChange={handleSearch} 
            />
          </div>
        </div>
        <div className="right-content">
          <div className="sort-section">
            <h4>Sort by ID</h4>
            <select onChange={handleSortOrderChange} value={sortOrder}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
          <div className="character-list">
            {filteredCharacters.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CharacterList;

