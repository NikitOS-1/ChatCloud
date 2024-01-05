import { useQuery } from 'react-query';
import axios from 'axios';

import { REACT_APP_API_URL } from './../../../API_DataBase';

interface CountriesInterface {
  countries: CountryInterface[];
}

interface CountryInterface {
  code: string;
  country: string;
}

const getCountries = async (): Promise<CountriesInterface> => {
  try {
    const response = await axios.get<CountriesInterface>(
      `${REACT_APP_API_URL}/countries`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch countries data');
  }
};

export const useCountries = () => {
  return useQuery<CountriesInterface>('countries', getCountries);
};
