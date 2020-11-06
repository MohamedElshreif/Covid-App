import React, { useState, useEffect } from 'react';

import { FormControl, NativeSelect } from '@material-ui/core';
import Style from './countryPicker.module.css';
import { countries } from '../../api';

function CountryPicker({ handleCountryChange }) {
  const [contriesData, setContriesData] = useState([]);
  useEffect(() => {
    const fetchcontries = async () => {
      setContriesData(await countries());
    };
    fetchcontries();
  }, []);
  return (
    <div className={Style.formStyle}>
      <FormControl className={Style.form}>
        <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
          <option vlaue='global'>global</option>
          {contriesData.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountryPicker;
