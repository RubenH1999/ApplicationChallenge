import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { AuthService } from '../auth.service';
import { Rol } from 'src/app/models/rol.model';
import { Maker } from 'src/app/models/maker.model';

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
  maker = new Maker(0,"","",false,"","","");
  constructor(private auth:AuthService) { 
    this.auth.getRollen().subscribe(result => {
      this.rollen = result
      this.rollen.splice(0, 1);
      console.log(this.rollen);
    })

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
    this.auth.createUser(this.gebruiker, this.password, this.maker);
  }
}
