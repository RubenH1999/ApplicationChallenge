import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login: boolean;
  userstate: any;
  title = 'ApplicationChallenge';

  constructor(private _authenticateService : AuthService, private router: Router, private http : HttpClient) {

    this.login = Boolean(JSON.parse(localStorage.getItem("login")));
    this.userstate = this._authenticateService.getUserState();
    //bij inloggen wordt login op true gezet in local storage
    if (this.userstate != null) {
      localStorage.setItem("login", "true");
      this.login = Boolean(JSON.parse(localStorage.getItem("login")));
    }
  }

  ngOnInit() {
    
      return this.http.get<Account>("https://localhost:44383/api/account/getbyauthuid/" + localStorage.getItem('authUID')).subscribe(result => {
        localStorage.setItem('accountID', result['accountID']);
        this.router.navigate(['']);
      });
      
    }
  

  uitloggen(){
    this._authenticateService.logout();
    localStorage.setItem("login", "false");
    this.login = Boolean(JSON.parse(localStorage.getItem("login")));
    this.router.navigate(['/']);
  }
}
