import { InputCountry } from "./styledComponentsForm";
import React, { useState } from "react";
import { countries } from "../../data/countries";

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
