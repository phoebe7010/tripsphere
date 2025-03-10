import React, { useState } from 'react';
import CitySelector from './CitySelector';
import DateSelector from './DateSelector';
import PeopleSelector from './PeopleSelector';
import SearchButton from './SearchButton';

const Filter = () => {
  const [openDate, setOpenDate] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = e => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <fieldset className="fieldset bg-white dark:bg-gray-950 border border-base-300 p-4 rounded-box">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CitySelector
            selectedCity={selectedCity}
            handleCityChange={handleCityChange}
          />
          <DateSelector
            openDate={openDate}
            setOpenDate={setOpenDate}
          />
          <PeopleSelector />
          <SearchButton />
        </div>
      </fieldset>
    </div>
  );
};

export default Filter;
