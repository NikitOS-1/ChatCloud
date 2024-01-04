import { useQuery } from 'react-query';
import axios from 'axios';

interface InterestsInterface {
  topics: TopicInterface[];
}
interface TopicInterface {
  id: string;
  topic: string;
}

const apiUrl = 'http://0.0.0.0:8080';

const fetchDataToInterests = async (): Promise<InterestsInterface> => {
  try {
    const response = await axios.get<InterestsInterface>(`${apiUrl}/topics`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch countries data');
  }
};

export const useInterests = () => {
  return useQuery<InterestsInterface>('interests', fetchDataToInterests);
};
