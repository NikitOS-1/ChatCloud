import { InputCountry } from "./styledComponentsForm";
import React, { useState } from "react";
import CountryFlag from "react-country-flag";

const countries = [
  { code: "US", name: "United States" },
  { code: "UA", name: "Ukraine" },
  // Добавьте другие страны по мере необходимости
];

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
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

{
  /* <div>
Selected Country:
<CountryFlag countryCode={selectedCountry} svg />
</div> */
}
