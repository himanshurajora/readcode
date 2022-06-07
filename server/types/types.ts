declare interface IUserLoginCredentials {
  username?: string;
  email?: string;
  password: string;
}

declare interface IUserLoginOutput {
  email: string;
  username: string;
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
