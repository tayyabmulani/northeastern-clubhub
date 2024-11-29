import axios from 'axios';

<<<<<<< Updated upstream
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
=======
const API_BASE_URL = 'http://localhost:3004/api/users'; // Replace with your backend API base URL

/**
 * Creates a new user by sending a POST request to the backend.
 * 
 * @param userData - The user data object containing email, name, password, and role.
 * @returns A promise that resolves to the backend response.
 */
export const createUser = async (userData: {
  email: string;
  name: string;
  password: string;
  role: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error: any) {
    console.error('Error creating user:', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
>>>>>>> Stashed changes
};
