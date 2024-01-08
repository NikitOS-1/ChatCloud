import { useMutation } from 'react-query';
import axios from 'axios';

import { REACT_APP_API_URL } from '../../../API_DataBase';

interface LoginData {
  username: string;
  profile_picture: string;
  country: string | null;
  topics: string[];
}

interface LoginResponse {
  user_id: string;
}

const loginRequest = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${REACT_APP_API_URL}/newuser`,
      data,
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginData>((requestData) =>
    loginRequest(requestData),
  );
};
