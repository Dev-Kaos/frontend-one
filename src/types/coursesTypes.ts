//  export interface ICourse {
//     id: number;
//     title: string;
//     description: string;
//     category: string;
//     price: number;
//     image: string;
//     language: string;
//     duration: string;
//     level: string;
//   }
 export interface ICourse {
    id: number| null;
    course: string;
    description: string;
    cycle: string;
    type: string;
    state: string;
    
  }