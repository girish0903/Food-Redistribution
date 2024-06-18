import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Replace with your backend API URL

const getUsersByRole = async (role) => {
  try {
    const response = await axios.get(`${API_URL}/users/byRole`, {
      params: { role }
    });
    return response.data; // Assuming backend returns an array of users
  } catch (error) {
    console.error('Error fetching users:', error);
    return []; // Return empty array or handle error as needed
  }
};

export { getUsersByRole };
