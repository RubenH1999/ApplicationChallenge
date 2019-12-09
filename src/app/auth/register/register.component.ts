import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  register(){
    this.auth.register(this.user.email,this.password);
  }
  user:Gebruiker=new Gebruiker(0,"","",0)
  password: string;
}
