import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { AuthService } from '../auth.service';
import { Rol } from 'src/app/models/rol.model';
import { Maker } from 'src/app/models/maker.model';
import { Bedrijf } from 'src/app/models/bedrijf.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authError: any;
  rollen: Rol[];
  sRole = null;
  password: string;
  gebruiker = new Gebruiker(0,"","","",0);
  maker = new Maker(0,"","",false,"","",0,0);
  bedrijf = new Bedrijf(0,"","",0,0);
  
  constructor(private auth:AuthService) { 
    

  }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }
  selectedRole(rolValue){
    console.log(rolValue);
    this.sRole = rolValue;
  }

  
  createUser() {
    //user hier aanmaken na subscribe 
    console.log(this.gebruiker)
    console.log(this.maker)
    this.auth.createUser(this.gebruiker, this.password, this.gebruiker, this.bedrijf);
  }
}
