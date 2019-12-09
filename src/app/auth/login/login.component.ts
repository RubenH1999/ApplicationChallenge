import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Gebruiker } from 'src/app/models/gebruiker.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  login(){
    this.auth.login(this.user.email,this.password);
  }
  user:Gebruiker=new Gebruiker(0,"","",0)
  password: string;
}
