import axios from 'axios';

export const login = async (email, password) => {
  try {
    console.log("Data being sent for login:", { email, password }); 
    const response = await axios.post('https://my-project-backend-ssaj.vercel.app/api/auth/login', { email, password });

   
    const { token, user } = response.data;
    localStorage.setItem('token', token);  
    localStorage.setItem('role', user.role); 
    
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Login error:", error.response.data);
    } else {
      console.error("Login error (no response):", error);
    }
    throw error;
  }
};

export const signup = async (data) => {
  try {
    console.log("Data being sent to signup API:", data);
    const response = await axios.post('https://my-project-backend-ssaj.vercel.app/api/auth/signup', data);

   
    const { token, user } = response.data;
    localStorage.setItem('token', token); 
    localStorage.setItem('role', user.role); 
    
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};
