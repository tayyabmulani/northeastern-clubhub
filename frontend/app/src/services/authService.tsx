import axios from 'axios';

const API_URL = 'http://localhost:3002/api/';

interface AuthResponse {
  accessToken: string;
}

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post(API_URL + 'login', {
    email,
    password
  });
  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = (): void => {
  localStorage.removeItem('user');
};
