import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface IProduct {

    id: number 
    title: string
    price: string
    category: string
    description: string
    image: string
    

}

interface IProductStore {

    products: IProduct[]|null
    setProducts: (products: IProduct[]) => void

    

  
   

}


export const useProductStore = create (
    persist<IProductStore>(
        (set) => ({
           
            products: [],
            setProducts: (products: IProduct[]) => set({products: products}),
            
            
            
        }),
        {name: 'Products'}
    )
)