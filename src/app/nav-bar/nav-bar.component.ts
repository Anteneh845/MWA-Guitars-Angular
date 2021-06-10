import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }
  logout(){
    return this.authenticationService.logout();
  }
}
