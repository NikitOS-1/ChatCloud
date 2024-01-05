import { useQuery } from 'react-query';
import axios from 'axios';

import { REACT_APP_API_URL } from '../../../API_DataBase';

interface InterestsInterface {
  topics: TopicInterface[];
}
interface TopicInterface {
  id: string;
  topic: string;
}

const getInterests = async (): Promise<InterestsInterface> => {
  try {
    const response = await axios.get<InterestsInterface>(
      `${REACT_APP_API_URL}/topics`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch countries data');
  }
};

export const useInterests = () => {
  return useQuery<InterestsInterface>('interests', getInterests);
};
