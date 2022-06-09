// ? these route constants are being defined, but I don't think I will use them

export const BASE_API_ROUTE = 'api';

// auth routes
export const AUTH_CONTROLLER_ROUTE = 'auth';
export const AUTH_REGISTER_ROUTE = 'register';
export const AUTH_LOGIN_ROUTE = 'login';
// user routes
export const USER_CONTROLLER_ROUTE = `user`;
export const USER_GET_BY_ID_ROUTE = `id/:id`;
export const USER_GET_BY_USERNAME_ROUTE = `username/:username`;

// project routes
export const PROJECT_CONTROLLER_ROUTE = 'project';
export const PROJECT_CREATE_ROUTE = 'create';
export const PROJECT_GET_ALL_ROUTE = 'all';
export const PROJECT_GET_BY_QUERY_ROUTE = 'query';