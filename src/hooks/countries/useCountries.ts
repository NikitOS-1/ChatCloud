import { useQuery } from 'react-query';
import axios from 'axios';

interface CountriesInterface {
  countries: CountryInterface[];
}

interface CountryInterface {
  code: string;
  country: string;
}

// const apiUrl = process.env.REACT_APP_API_URL; //doesn't work process error
const apiUrl = 'http://0.0.0.0:8080';

const fetchDataToCountries = async (): Promise<CountriesInterface> => {
  try {
    const response = await axios.get<CountriesInterface>(`${apiUrl}/countries`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch countries data');
  }
};

export const useCountries = () => {
  return useQuery<CountriesInterface>('countries', fetchDataToCountries);
};
