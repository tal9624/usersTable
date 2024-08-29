import axios from 'axios';

export const getUsers = async () => {
  const response = await axios.get('http://localhost:3001/users');
  return response.data;
};
