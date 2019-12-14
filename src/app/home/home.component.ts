import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: firebase.User;
  constructor(private auth: AuthService, private router: Router, private account: AccountService) { }

  ngOnInit() {
    //zo current user authUID opvragen
    console.log(this.auth.currentUser);
    
  }

  login(){
    this.router.navigate(['/login']);
  }
  register(){
    this.router.navigate(['/register']);
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['login'])
    localStorage.clear();
  }

}
