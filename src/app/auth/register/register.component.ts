import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { AuthService } from '../auth.service';
import { Rol } from 'src/app/models/rol.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authError: any;
  rollen: Rol[];
  sRole = null;
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

  
  createUser(frm) {
    console.log(frm)
    this.auth.createUser(frm.value);
  }
}
