import {Component, OnInit} from '@angular/core';
import {UserAuthModel} from "../user.model";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  successMessage!: string;
  errorMessage!: string;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }


  loginHandler(user: UserAuthModel) {
    this.userService.authenticateUser(user)
      .subscribe(() => this.router.navigate(['']))
  }
}
