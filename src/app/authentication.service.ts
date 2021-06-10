import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }
  public isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp > (Date.now() / 1000)
    }
    return false
  }

  public logout(){
    this.remove();
  }
  public getCurrentUser() {
    if (this.isLoggedIn()) {
      const token = this.getToken();
      const {user} = JSON.parse(atob(token!.split(".")[1]));
      return user;
    }
    return null;
  }

  saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  remove() {
    localStorage.removeItem("token");
  }

}
