import { BASE_URL } from '../models/api.config'; // URL del json-server

const fetchFromAPI = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export default fetchFromAPI;