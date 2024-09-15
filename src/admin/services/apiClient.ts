import axios from "axios";

const client = axios.create({
    baseURL: 'https://tu-api.com',
    headers: {
      'Content-Type': 'application/json',
      // Otros headers si es necesario
      
    }
  });
  
  export default client;