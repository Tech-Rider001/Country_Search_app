import React, { useState } from 'react';
import countryData from './countries.json'; // Import the JSON data

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredCountries = countryData.filter(
        (country) =>
          country.country.toLowerCase().includes(value.toLowerCase()) ||
          country.capital.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredCountries);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by country or capital..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((item, index) => (
            <li key={index}>
              {item.country} - {item.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
