import axios from 'axios';

const API_URL = 'https://my-project-backend-ssaj.vercel.app/api/applications/'; 

export const submitApplication = async (applicationData) => {
    try {
        const response = await axios.post(`https://my-project-backend-ssaj.vercel.app/api/applications`, applicationData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
};
