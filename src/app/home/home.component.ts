import {Component, OnInit} from '@angular/core';

import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: firebase.User;
  userDB: Account;

  constructor(private auth: AuthService, private router: Router, private account: AccountService) {
  }

  ngOnInit() {
    //zo current user authUID opvragen
    console.log(this.auth.currentUser);
    this.account.getAccountByID(+localStorage.getItem('accountID')).subscribe(result => {
      console.log(result);
      if (result.rolID === 1) {
        // ingelogd als admin
        this.router.navigate(['/admin']);
      }
      if (result.rolID === 2) {
        // ingelogd als maker
        this.router.navigate(['/maker-home']);
      }
      if (result.rolID === 3) {
        // ingelogd als bedrijf
        this.router.navigate(['/bedrijf-home']);
      }
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.auth.logout();
  }

}
