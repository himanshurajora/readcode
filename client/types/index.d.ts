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

export interface IUserLoginResponseData {
  id: number;
  name: string;
  email: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  token: string;
}

export interface IProjectFormInput {
  title: string;
  description: string;
  link: string;
  tags: string;
}
export interface IProjectInput {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface IUserRegisterInput {
  name: string;
  username: string;
  email: string;
  password: string;
}
