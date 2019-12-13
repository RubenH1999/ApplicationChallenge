import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authError: any;
  constructor(private auth: AuthService, private account : AccountService, private router : Router) {
    
   }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }
  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
    
    
  }
  
   
  
  
}
