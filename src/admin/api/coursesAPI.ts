import axios from "axios";

 const coursesAPI = axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'Content-Type': 'application/json',
            // Otros headers si es necesario
            
        }

    });

    coursesAPI.interceptors.request.use((config) => {
        return config
    })

    coursesAPI.interceptors.response.use((response) => {
        return response
    })

    // const getProducts = async () => {
    //     const { data } = await productsAPI.get('/products')
    //     return data
    // }
    
    export const getCourses = async () => {
        const res = await coursesAPI.get('/api/course/all')
        return res.data;
    }
    export default coursesAPI