import axios from "axios";

 const productsAPI = axios.create({
        baseURL: 'https://fakestoreapi.com',
        headers: {
            'Content-Type': 'application/json',
            // Otros headers si es necesario
            
        }

    });

    productsAPI.interceptors.request.use((config) => {
        return config
    })

    productsAPI.interceptors.response.use((response) => {
        return response
    })

    // const getProducts = async () => {
    //     const { data } = await productsAPI.get('/products')
    //     return data
    // }
    
    export const getProducts = async () => {
        const res = await productsAPI.get('/products')
        return res.data;
    }
    export default productsAPI