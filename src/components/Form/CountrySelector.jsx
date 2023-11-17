import { InputCountry } from "./styledComponentsForm";
import React, { useState } from "react";
import { countries } from "../../data/countries";
import { useDispatch } from "react-redux";
import { updateCountry } from "redux/slices/countrySlice";

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState("UA");

  const dispatch = useDispatch();

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    dispatch(updateCountry(event.target.value));
  };

  return (
    <InputCountry>
      <div>
        <p>Country: </p>
      </div>
      <div>
        <select
          id="countrySelect"
          value={selectedCountry}
          onChange={handleCountryChange}>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    </InputCountry>
  );
};
export default CountrySelector;
