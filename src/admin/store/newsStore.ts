import {create} from 'zustand';
import {persist} from 'zustand/middleware';


interface INewsStore {
   
    tabValue: number    
   
    setTabValue: (tabValue: number) => void
    

}   

export const useNewsStore = create (
    persist<INewsStore>(
        (set) => ({
            tabValue: 0,
            setTabValue: (tabValue: number) => set({tabValue: tabValue}),
            
            
        }),
        {name: 'news'}
    )
)