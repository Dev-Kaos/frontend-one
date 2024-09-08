import {create} from 'zustand';
import {persist} from 'zustand/middleware';


interface IAuthStore {
   
    token: string | null
    role: string 
    isAuthenticated: boolean
    name: string
    email: string
    
    setToken: (token: string) => void
    setRole: (role: string) => void
    setName: (name: string) => void
    setEmail: (email: string) => void
    logOut: () => void

}   

export const useAuthStore = create (
    persist<IAuthStore>(
        (set) => ({
            token: null,
            // Se inicializa en vacio " " para pruebas se agrega el rol
            role: "administrador",
            // Se inicializa en false para pruebas true
            isAuthenticated: true,
            name: "manuel",
            email: "pKz5t@example.com",
            setToken: (token: string) => set({
                token: token,
               // Aqui se pone cando ya este la parte del token
                // isAuthenticated: true
            }),
            setRole: (role: string) => set({role: role}),
            setName: (name: string) => set({name: name}),
            setEmail: (email: string) => set({email: email}),

            logOut: () => set({token: null, role: "", isAuthenticated: false}),
            
        }),
        {name: 'auth'}
    )
)