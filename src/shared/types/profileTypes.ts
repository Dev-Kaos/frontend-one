export interface IProfileCreate{
    
    userId: number;
    bio: string;
    image: string;
  }

 
 export interface IProfileEdit {
    id: number;  
    userId: number;
    bio: string;
    image: string;
  }