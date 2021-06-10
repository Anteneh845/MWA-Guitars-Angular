import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, UserAuthModel} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  registerUser(user: User) {
    return this.httpClient.post(`/api/users`, user)
  }

  authenticateUser(userAuthModel: UserAuthModel) {
    return this.httpClient.post(`/api/auth`, userAuthModel)
  }
}
