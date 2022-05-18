//Modulo que guarda interfaces de los datos que se envian a la api y reciben en las peticiones de usuario desde la api
export interface RegisterUser {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  email: string;
  firstname: string;
  id: string;
  lastname: string;
  role: string;
  username: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  created: string;
  emailVerified: boolean;
  id: string;
  responseCode: number;
  role: string;
  superuser: {
    id: string;
    rootUserId: string;
    username: string;
  },
  superuserId: string;
  ttl: string;
  userId: string;
}
