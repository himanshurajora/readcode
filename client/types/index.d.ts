export interface ITag {
  name: string;
}
export interface IUser {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IProject {
  id: number;
  title: string;
  description: string;
  link: string;
  userId: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: any;
  tags: ITag[];
  user: IUser;
}

export interface IUserLoginCredentials {
  username: string;
  password: string;
}
