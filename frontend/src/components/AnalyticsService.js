import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Replace with your actual API URL

const AnalyticsService = {
    getAnalyticsData: () => {
        return axios.get(`${API_URL}/analytics`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching analytics data:', error);
                throw error;
            });
    }
};

export default AnalyticsService;