import {create} from 'zustand';
import {persist} from 'zustand/middleware';


interface IAuthStore {
   
    token: string | null
    isAuthenticated: boolean
    role: string 
    name: string
    email: string
    
    setToken: (token: string) => void
    setIsAuthenticated: (isAuthenticated: boolean) => void
    setRole: (role: string) => void
    setName: (name: string) => void
    setEmail: (email: string) => void
    logOut: () => void

}   

export const useAuthStore = create (
    persist<IAuthStore>(
        (set) => ({
            // loginrequest
            token: null,
            setToken: (token: string) => set({
                token: token,
               // Aqui se pone cando ya este la parte del token
                // isAuthenticated: true
            }),
            isAuthenticated: false,
            setIsAuthenticated: (isAuthenticated: boolean) => set({isAuthenticated: isAuthenticated}),
            // Se inicializa en false para pruebas true
            // profile
            role: "administrador",
            // Se inicializa en vacio " " para pruebas se agrega el rol
            name: "manuel vela",
            email: " ",
            setRole: (role: string) => set({role: role}),
            setName: (name: string) => set({name: name}),
            setEmail: (email: string) => set({email: email}),


            logOut: () => set({token: null, role: "", isAuthenticated: false}),
            
        }),
        {name: 'auth'}
    )
)