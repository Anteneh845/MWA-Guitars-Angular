import {Component, OnInit} from '@angular/core';
import {UserAuthModel, UserAuthResponse} from "../user.model";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  successMessage!: string;
  errorMessage!: string;

  constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
  }


  loginHandler(user: UserAuthModel) {
    this.userService.authenticateUser(user)
      .subscribe(user  => {
          this.authenticationService.saveToken((user as UserAuthResponse).token)
          this.router.navigate([''])
        },
        err => this.errorMessage = err.error)
  }
}
