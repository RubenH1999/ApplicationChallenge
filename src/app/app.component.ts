import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login: boolean;
  title = 'ApplicationChallenge';

  constructor(private _authenticateService : AuthService, private router: Router) {

    this.login = Boolean(JSON.parse(localStorage.getItem("login")));
    
    //bij inloggen wordt login op true gezet in local storage
    if (this._authenticateService.getUserState() != null) {
      localStorage.setItem("login", "true");
      this.login = Boolean(JSON.parse(localStorage.getItem("login")));
    }
  }

  ngOnInit() {
  }

  uitloggen(){
    this._authenticateService.logout();
    localStorage.setItem("login", "false");
    this.login = Boolean(JSON.parse(localStorage.getItem("login")));
    this.router.navigate(['/']);
  }
}
