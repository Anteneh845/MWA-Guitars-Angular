export interface User {
  _id: string
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface UserAuthModel {
  email: string
  password: string
}

export interface UserAuthResponse{
  fullName:string
  lastName:string
  token:string
}
