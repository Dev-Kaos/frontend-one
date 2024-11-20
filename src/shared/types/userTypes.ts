
export interface IUserCreate{
    
    name: string;
    lastname: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    role: string;
  }

 export interface IUserEdit {
    id: number;  
    name: string;
    lastname: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    role: string;
  }