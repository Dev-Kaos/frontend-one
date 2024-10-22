export interface ISidebarProps {
  data: ISidebarItems[];
  user: ISidebarUser;
}

export interface ISidebarItems {
    title: string;
    icon: React.ReactElement;
    link: string;
  }

  export interface ISidebarUser {
    id: number;
    firstName: string;
    middleName: string;    
    lastName: string;
    surname: string;
    username: string;
    email: string;
    photo: string;
    role: [string];
   

 }
